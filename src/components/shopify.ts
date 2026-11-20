// src/commerce/shopify.ts

// Minimal ambient typings so TS doesn't complain about the global SDK
declare global {
  interface Window {
    ShopifyBuy?: any;
  }
}

export type ShopifyInitOptions = {
  /** Named Shopify stores. Buttons select one with data-shopify-store. */
  stores: Record<
    string,
    { domain: string; token: string; moneyFormat?: string; maxQuantity?: number }
  >;
  /** Store used when a button does not set data-shopify-store. */
  defaultStore?: string;
  /** Money format for the UI (defaults to ${{amount}}) */
  moneyFormat?: string;
  /** Attribute that contains the numeric product ID */
  productIdAttr?: string;
  /** Attribute that selects a store from `stores`. */
  storeAttr?: string;
  /** Attribute read for product text alignment. */
  alignmentAttr?: string;
  /** Root margin for lazy-loading */
  rootMargin?: string;
  /** Optional: override the CDN URL (rare) */
  sdkUrl?: string;
};

const DEFAULTS = {
  moneyFormat: '%24%7B%7Bamount%7D%7D',
  productIdAttr: 'data-shopify-product-id',
  storeAttr: 'data-shopify-store',
  alignmentAttr: 'data-shopify-alignment',
  rootMargin: '300px',
  sdkUrl: 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js',
};

let sdkPromise: Promise<void> | null = null;

export class Shopify {
  private opts: ShopifyInitOptions & typeof DEFAULTS;
  private io: IntersectionObserver | null = null;
  private initialized = false;
  private uiPromises = new Map<string, Promise<any>>();

  constructor(options: ShopifyInitOptions) {
    if (!options?.stores || !Object.keys(options.stores).length) {
      throw new Error('Shopify: at least one store is required.');
    }
    this.opts = { ...DEFAULTS, ...options };
    Object.entries(this.opts.stores).forEach(([name, store]) => {
      if (!store?.domain || !store?.token) {
        throw new Error(`Shopify: store "${name}" must have a domain and token.`);
      }
    });
    if (this.opts.defaultStore && !this.opts.stores[this.opts.defaultStore]) {
      throw new Error(`Shopify: default store "${this.opts.defaultStore}" is not configured.`);
    }
  }

  public init() {
    // console.log('init');
    if (this.initialized) return;
    this.initialized = true;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(`[${this.opts.productIdAttr}]`)
    );
    if (!nodes.length) return; // nothing to do

    this.io = new IntersectionObserver(this.onIntersect, { rootMargin: this.opts.rootMargin });
    nodes.forEach((el) => this.io!.observe(el));
  }

  /** Clean up (optional) */
  public destroy() {
    this.io?.disconnect();
    this.io = null;
  }

  // ---- internals ----
  private onIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target as HTMLElement;
      this.io?.unobserve(node);
      const storeKey = node.getAttribute(this.opts.storeAttr) || this.opts.defaultStore;
      if (!storeKey || !this.opts.stores[storeKey]) {
        console.error(`Shopify: missing or unknown store on product button.`, node);
        return;
      }
      this.getUi(storeKey)
        .then((ui) => this.mount(node, ui, storeKey))
        .catch((error) =>
          console.error(`Shopify: failed to initialize store "${storeKey}".`, error)
        );
    });
  };

  private ensureSdk(): Promise<void> {
    if (window.ShopifyBuy?.UI) {
      return Promise.resolve();
    }
    if (sdkPromise) return sdkPromise;

    sdkPromise = new Promise<void>((resolve, reject) => {
      const existingScript = Array.from(document.scripts).find(
        (script) => script.src === new URL(this.opts.sdkUrl, document.baseURI).href
      );
      const script = existingScript || document.createElement('script');
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Shopify Buy Button SDK failed to load.'));
      if (!existingScript) {
        script.src = this.opts.sdkUrl;
        document.head.appendChild(script);
      }
    }).catch((error) => {
      sdkPromise = null;
      throw error;
    });

    return sdkPromise;
  }

  private getUi(storeKey: string): Promise<any> {
    const existing = this.uiPromises.get(storeKey);
    if (existing) return existing;

    const store = this.opts.stores[storeKey];
    const uiPromise = this.ensureSdk().then(() => {
      const client = window.ShopifyBuy.buildClient({
        domain: store.domain,
        storefrontAccessToken: store.token,
      });
      return window.ShopifyBuy.UI.onReady(client);
    });
    this.uiPromises.set(storeKey, uiPromise);
    uiPromise.catch(() => this.uiPromises.delete(storeKey));
    return uiPromise;
  }

  private mount(node: HTMLElement, ui: any, storeKey: string) {
    const productId = node.getAttribute(this.opts.productIdAttr);
    if (!productId) return;

    const shopAlignment = node.getAttribute(this.opts.alignmentAttr) || 'left';
    const maxQuantity = this.opts.stores[storeKey].maxQuantity;
    const enforceMaxQuantity = (product: any) => {
      if (!maxQuantity) return;

      const selectedQuantity = Number(product.selectedQuantity ?? 1);
      const cappedQuantity = Number.isFinite(selectedQuantity)
        ? Math.min(selectedQuantity, maxQuantity)
        : 1;

      if (cappedQuantity !== selectedQuantity) {
        product.updateQuantity(() => cappedQuantity);
      }
    };

    ui.createComponent('product', {
      id: productId,
      node,
      moneyFormat: this.opts.stores[storeKey].moneyFormat || this.opts.moneyFormat,
      options: {
        product: {
          layout: 'horizontal',
          styles: {
            product: {
              width: '100%',
              '@media (min-width: 601px)': {
                'max-width': '100%',
                'margin-bottom': '50px',
              },
              'text-align': 'inherit',
            },
            buttonWithQuantity: {
              width: '100%',
              display: 'flex',
            },
            buttonWrapper: {
              flex: '1 1 0%',
              width: '100%',
              'min-width': '0',
            },
            button: {
              width: '100%',
              'font-family': 'Quantico, sans-serif',
              'font-weight': 'bold',
              'font-size': '16px',
              'padding-top': '16px',
              'padding-bottom': '16px',
              color: '#E9ECF3',
              'background-color': '#ff8c00',
              ':hover': {
                'background-color': '#ff8c00',
              },
              ':focus': {
                'background-color': '#ff8c00',
              },
              'border-radius': '0px',
              'padding-left': '32px',
              'padding-right': '32px',
              border: 'solid #0F1513 !important',
              'border-width': '1px !important',
            },
            quantityInput: {
              // width: '100%',
              'font-size': '16px',
              'font-family': 'Quantico, sans-serif',
              'font-weight': '700',
              background: '#E9ECF3 !important',
              color: '#FF8C00',
              'border-radius': '0px',
              'padding-top': '16px',
              'padding-bottom': '16px',
              border: 'solid #0F1513 !important',
              'border-width': '1px 0px 1px 1px !important',
            },
          },
          buttonDestination: 'checkout',
          contents: {
            img: false,
            button: false,
            buttonWithQuantity: true,
            title: false,
            price: false,
          },
          text: {
            button: 'Buy Now',
          },
          events: maxQuantity
            ? {
                updateQuantity: enforceMaxQuantity,
                addVariantToCart: enforceMaxQuantity,
                openCheckout: enforceMaxQuantity,
              }
            : {},
          googleFonts: ['Quantico'],
        },
        productSet: {
          styles: {
            products: {
              '@media (min-width: 601px)': {
                'margin-left': '-20px',
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': '100%',
                'margin-left': '0px',
                'margin-bottom': '0px',
              },
            },
            button: {
              'font-family': 'Quantico, sans-serif',
              'font-weight': 'bold',
              'font-size': '16px',
              'padding-top': '16px',
              'padding-bottom': '16px',
              color: '#ff8c00',
              ':hover': {
                color: '#ff8c00',
                'background-color': '#0b7aa1',
              },
              'background-color': '#0c87b3',
              ':focus': {
                'background-color': '#0b7aa1',
              },
              'border-radius': '0px',
              'padding-left': '32px',
              'padding-right': '32px',
              border: '1px solid #01071C',
            },
            quantityInput: {
              'font-size': '16px',
              'padding-top': '16px',
              'padding-bottom': '16px',
            },
          },
          googleFonts: ['Open Sans'],
          text: {
            button: 'Add to cart',
          },
        },
        // option: {},
        // // cart: false,
        // // toggle: false,
        // cart: {
        //   styles: {
        //     button: {
        //       'font-family': 'Quantico, sans-serif',
        //       'font-weight': 'bold',
        //       'font-size': '16px',
        //       'padding-top': '16px',
        //       'padding-bottom': '16px',
        //       color: '#ff8c00',
        //       ':hover': {
        //         color: '#ff8c00',
        //         'background-color': '#0b7aa1',
        //       },
        //       'background-color': '#0c87b3',
        //       ':focus': {
        //         'background-color': '#0b7aa1',
        //       },
        //       'border-radius': '0px',
        //     },
        //   },
        //   text: {
        //     total: 'Subtotal',
        //     button: 'Checkout',
        //   },
        //   googleFonts: ['Quantico'],
        // },
        // toggle: {
        //   styles: {
        //     toggle: {
        //       'font-family': 'Quantico, sans-serif',
        //       'font-weight': 'bold',
        //       'background-color': '#0c87b3',
        //       ':hover': {
        //         'background-color': '#0b7aa1',
        //       },
        //       ':focus': {
        //         'background-color': '#0b7aa1',
        //       },
        //     },
        //     count: {
        //       'font-size': '16px',
        //       color: '#ff8c00',
        //       ':hover': {
        //         color: '#ff8c00',
        //       },
        //     },
        //     iconPath: {
        //       fill: '#ff8c00',
        //     },
        //   },
        //   googleFonts: ['Quantico'],
        // },
      },
    });
  }
}

export const shopify = (options: ShopifyInitOptions) => {
  const instance = new Shopify(options);
  instance.init();
  return instance; // return it so you can destroy() if needed
};

export default shopify;

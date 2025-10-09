// src/commerce/shopify.ts

// Minimal ambient typings so TS doesn't complain about the global SDK
declare global {
  interface Window {
    ShopifyBuy?: any;
  }
}

export type ShopifyInitOptions = {
  /** Your shop domain, e.g. "example.myshopify.com" */
  domain: string;
  /** Storefront API access token (public) */
  token: string;
  /** Money format for the UI (defaults to ${{amount}}) */
  moneyFormat?: string;
  /** Selector for product mount nodes */
  productSelector?: string;
  /** Attribute that contains the numeric product ID */
  productIdAttr?: string;
  /** Root margin for lazy-loading */
  rootMargin?: string;
  /** Optional: override the CDN URL (rare) */
  sdkUrl?: string;
  alignment?: string;
};

const DEFAULTS: Required<Omit<ShopifyInitOptions, 'domain' | 'token'>> = {
  moneyFormat: '%24%7B%7Bamount%7D%7D',
  productSelector: '.product_buy',
  productIdAttr: 'data-shopify-product-id',
  rootMargin: '300px',
  sdkUrl: 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js',
  alignment: 'data-shopify-alignment',
};

export class Shopify {
  private opts: ShopifyInitOptions & typeof DEFAULTS;
  private io: IntersectionObserver | null = null;
  private initialized = false;
  private sdkLoaded = false;

  constructor(options: ShopifyInitOptions) {
    console.log('!!Shopify!!');
    if (!options?.domain || !options?.token) {
      throw new Error('Shopify: "domain" and "token" are required.');
    }
    this.opts = { ...DEFAULTS, ...options };
  }

  public init() {
    console.log('init');
    if (this.initialized) return;
    this.initialized = true;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(`[${this.opts.productIdAttr}]`)
    );
    console.log('nodes', nodes);
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
    console.log('intersect');
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      this.io?.unobserve(entry.target as Element);
      this.ensureSdk().then(() => this.mount(entry.target as HTMLElement));
    });
  };

  private ensureSdk(): Promise<void> {
    if (this.sdkLoaded || (window.ShopifyBuy && window.ShopifyBuy.UI)) {
      this.sdkLoaded = true;
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      const s = document.createElement('script');
      s.async = true;
      s.src = this.opts.sdkUrl;
      s.onload = () => {
        this.sdkLoaded = true;
        resolve();
      };
      document.head.appendChild(s);
      console.log('script', s);
    });
  }

  private mount(node: HTMLElement) {
    console.log('mount');

    const productId = node.getAttribute(this.opts.productIdAttr);
    console.log('!!!!', productId);
    if (!productId) return;

    console.log('SHOPIFY', productId);

    const client = window.ShopifyBuy.buildClient({
      domain: this.opts.domain,
      storefrontAccessToken: this.opts.token,
    });

    const shopAlignment = node.getAttribute(this.opts.alignment) || 'left';

    window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
      ui.createComponent('product', {
        id: '8545406189739',
        node: document.querySelector('.oakley-product'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          product: {
            styles: {
              product: {
                '@media (min-width: 601px)': {
                  'max-width': 'calc(25% - 20px)',
                  // 'margin-left': '20px',
                  'margin-bottom': '50px',
                },
                'text-align': shopAlignment,
              },
              button: {
                'font-family': 'Quantico, sans-serif',
                'font-weight': 'bold',
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
                color: '#E9ECF3',
                'background-color': '#ff8c00',
                ':hover': {
                  'background-color': '#0b7aa1',
                },
                ':focus': {
                  'background-color': '#0b7aa1',
                },
                'border-radius': '0px',
                'padding-left': '32px',
                'padding-right': '32px',
                border: '2px solid #01071C !important',
              },
              quantityInput: {
                'font-size': '16px',
                'padding-top': '16px',
                'padding-bottom': '16px',
                'font-family': 'Quantico, sans-serif',
                'font-weight': '700',
                color: '#FF8C00',
                border: '2px solid #01071C',
                'border-radius': '0px',
                background: '#E9ECF3 !important',
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
            googleFonts: ['Quantico'],
            text: {
              button: 'Add to cart',
            },
          },
          option: {},
          cart: {
            styles: {
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
              },
            },
            text: {
              total: 'Subtotal',
              button: 'Checkout',
            },
            googleFonts: ['Quantico'],
          },
          toggle: {
            styles: {
              toggle: {
                'font-family': 'Quantico, sans-serif',
                'font-weight': 'bold',
                'background-color': '#0c87b3',
                ':hover': {
                  'background-color': '#0b7aa1',
                },
                ':focus': {
                  'background-color': '#0b7aa1',
                },
              },
              count: {
                'font-size': '16px',
                color: '#ff8c00',
                ':hover': {
                  color: '#ff8c00',
                },
              },
              iconPath: {
                fill: '#ff8c00',
              },
            },
            googleFonts: ['Quantico'],
          },
        },
      });
    });
  }
}

// ---- your scaffold exports ----
export const shopify = (options: ShopifyInitOptions) => {
  const instance = new Shopify(options);
  instance.init();
  // console.log('instance', instance);
  return instance; // return it so you can destroy() if needed
};

export default shopify;

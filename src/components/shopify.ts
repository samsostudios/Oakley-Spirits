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
};

const DEFAULTS: Required<Omit<ShopifyInitOptions, 'domain' | 'token'>> = {
  moneyFormat: '%24%7B%7Bamount%7D%7D',
  productSelector: '.oakley-product',
  productIdAttr: 'data-shopify-product-id',
  rootMargin: '300px',
  sdkUrl: 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js',
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

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(this.opts.productSelector));
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

    window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
      ui.createComponent('product', {
        id: productId,
        node: document.getElementById('my-product'),
      });
      ui.createComponent('toggle', {
        node: document.getElementById('my-toggle'),
      });
      //   ui.createComponent('product', {
      //     id: productId,
      //     node,
      //     moneyFormat: this.opts.moneyFormat,
      //     options: {
      //       product: {
      //         contents: {
      //           img: false,
      //           title: false,
      //           price: false,
      //           button: false,
      //           buttonWithQuantity: true,
      //         },
      //         text: { button: 'Add to Cart' },
      //         styles: {
      //           button: {
      //             'font-family': 'inherit',
      //             'font-size': '16px',
      //             'padding-top': '14px',
      //             'padding-bottom': '14px',
      //             'padding-left': '28px',
      //             'padding-right': '28px',
      //             'background-color': '#172d5a',
      //             ':hover': { 'background-color': '#274d99' },
      //             ':focus': { 'background-color': '#274d99' },
      //             'border-radius': '0',
      //           },
      //           quantityInput: {
      //             'font-size': '16px',
      //             'padding-top': '14px',
      //             'padding-bottom': '14px',
      //           },
      //         },
      //       },
      //       cart: {
      //         popup: true,
      //         startOpen: false,
      //         text: {
      //           title: 'Your Cart',
      //           total: 'Subtotal',
      //           button: 'Continue to Checkout',
      //           notice:
      //             'We can ship to most states plus D.C. We are unable to ship to: Alabama, Alaska, Arkansas, Hawaii, Michigan, South Dakota, Tennessee, Utah.',
      //         },
      //         styles: {
      //           cart: { 'background-color': '#051b6b' },
      //           footer: { 'background-color': '#051b6b' },
      //           title: { color: '#fff', 'font-size': '28px', 'line-height': '1.2' },
      //           lineItems: { color: '#fff' },
      //           subtotalText: { color: '#fff' },
      //           subtotal: { color: '#fff' },
      //           notice: { color: '#fff' },
      //           close: { color: '#fff' },
      //           button: {
      //             'font-family': 'inherit',
      //             'font-size': '18px',
      //             'font-weight': '700',
      //             'background-color': '#e9ecf3',
      //             ':hover': { 'background-color': '#e9ecf3' },
      //             ':focus': { 'background-color': '#e9ecf3' },
      //             'border-radius': '0',
      //             color: '#000',
      //           },
      //         },
      //         contents: { note: true },
      //       },
      //       toggle: {
      //         sticky: false,
      //         // styles: {
      //         //   toggle: {
      //         //     'background-color': '#172d5a',
      //         //     border: '5px solid yellow',
      //         //     display: 'flex',
      //         //     'flex-drection': 'horizontal',
      //         //     ':hover': { 'background-color': '#274d99' },
      //         //     ':focus': { 'background-color': '#274d99' },
      //         //   },
      //         //   count: { 'font-size': '14px' },
      //         // },
      //       },
      //       lineItem: {
      //         styles: {
      //           title: { color: '#fff' },
      //           variantTitle: { color: '#fff' },
      //           price: { color: '#fff' },
      //           fullPrice: { color: '#fff' },
      //           quantity: { color: '#fff' },
      //           quantityInput: { color: '#fff', 'border-color': '#fff' },
      //         },
      //       },
      //     },
      //   });
      //   const cartToggle = document.querySelector('#cartToggle');
      //   if (cartToggle) {
      //     ui.createComponent('toggle', {
      //       node: cartToggle,
      //       options: {
      //         toggle: {
      //           contents: { count: true, icon: true, title: true },
      //           styles: {
      //             toggle: {
      //               //   width: '44px',
      //               //   height: '44px',
      //               //   display: 'grid',
      //               //   placeItems: 'center',
      //               //   border: '2px solid #0B1222',
      //               backgroundColor: 'pink',
      //               //   borderRadius: '0',
      //               //   padding: '0',
      //             },
      //             count: {
      //               fontFamily: 'inherit',
      //               fontWeight: '700',
      //               letterSpacing: '.08em',
      //               fontSize: '20px',
      //               lineHeight: '1',
      //               color: '#0B1222',
      //             },
      //           },
      //         },
      //       },
      //     });
      //   }
    });
  }
}

// ---- your scaffold exports ----
export const shopify = (options: ShopifyInitOptions) => {
  const instance = new Shopify(options);
  instance.init();
  console.log('instance', instance);
  return instance; // return it so you can destroy() if needed
};

export default shopify;

import Flux from 'flux-state';

export const PRODUCT_EVENT = 'PRODUCT_EVENT';
export const PRODUCT_ERROR_EVENT = 'PRODUCT_ERROR_EVENT';
export const CATEGORIES_EVENT  = 'CATEGORIES_EVENT';
export const CATEGORIES_ERROR_EVENT = 'CATEGORIES_ERROR_EVENT';
export const ADD_CART_EVENT = 'ADD_CART_EVENT';
export const ADD_CART_ERROR = 'ADD_CART_ERROR';
export const FILTER_CATEGORY_EVENT = "FILTER_CATEGORY_EVENT";

class ProductStore extends Flux.DashStore {
  constructor(){
    super();
    this.addEvent(PRODUCT_EVENT);
    this.addEvent(PRODUCT_ERROR_EVENT);
    this.addEvent(CATEGORIES_EVENT);
    this.addEvent(CATEGORIES_ERROR_EVENT);
    this.addEvent(ADD_CART_EVENT);
    this.addEvent(ADD_CART_ERROR);
    this.addEvent(FILTER_CATEGORY_EVENT);
  }
}

const productStore = new ProductStore();

export {productStore};
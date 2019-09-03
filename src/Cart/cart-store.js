import Flux from 'flux-state';

export const FETCH_CART_EVENT = "FETCH_CART_EVENT";
export const FETCH_CART_ERROR = "FETCH_CART_ERROR";
export const BUY_EVENT = "BUY_EVENT";
export const BUY_ERROR = "BUY_ERROR";
export const DELETE_CART_EVENT = "DELETE_CART_EVENT";
export const DELETE_CART_ERROR = "DELETE_CART_ERROR";

class CartStore extends Flux.DashStore{
  constructor() {
    super();

    this.addEvent(FETCH_CART_EVENT);
    this.addEvent(FETCH_CART_ERROR);
    this.addEvent(BUY_EVENT);
    this.addEvent(BUY_ERROR);
    this.addEvent(DELETE_CART_EVENT);
    this.addEvent(DELETE_CART_ERROR);
    
  }

}
const cartStore = new CartStore();

export {cartStore};

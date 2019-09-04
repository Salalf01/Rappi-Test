import Flux from 'flux-state';

export const FETCH_CART_EVENT = "FETCH_CART_EVENT";
export const CART_EVENT_ERROR = "CART__EVENT_ERROR";
export const BUY_EVENT = "BUY_EVENT";
export const DELETE_CART_EVENT = "DELETE_CART_EVENT";
export const QUANTITY_EVENT = "QUANTITY_EVENT";

class CartStore extends Flux.DashStore{
  constructor() {
    super();

    this.addEvent(FETCH_CART_EVENT);
    this.addEvent(CART_EVENT_ERROR);
    this.addEvent(BUY_EVENT);
    this.addEvent(DELETE_CART_EVENT);
    this.addEvent(QUANTITY_EVENT);
    
  }

}
const cartStore = new CartStore();

export {cartStore};

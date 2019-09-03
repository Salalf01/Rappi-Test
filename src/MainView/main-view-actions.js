import Flux from 'flux-state';
import products from '../Data/products.json';
import * as R from 'ramda';
import { PRODUCT_EVENT, ADD_CART_ERROR, ADD_CART_EVENT } from './main-view-store.js';



export const getProducts = () =>{

  const DBproducts = R.clone(products);

  Flux.dispatchEvent(PRODUCT_EVENT, DBproducts);

};

export const addToCart = (product) =>{

  const carStorage = window.localStorage;
  try{
    carStorage.setItem(product);
  }
  catch(e){
    Flux.dispatchEvent(ADD_CART_ERROR, e);
  }
  Flux.dispatchEvent(ADD_CART_EVENT, product.name);
    
  return product.name;
};
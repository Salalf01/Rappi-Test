import Flux from 'flux-state';
import products from '../Data/products.json';
import * as R from 'ramda';
import { PRODUCT_EVENT } from './main-view-store.js';



export const getProducts = () =>{

  const DBproducts = R.clone(products);

  Flux.dispatchEvent(PRODUCT_EVENT, DBproducts);

};
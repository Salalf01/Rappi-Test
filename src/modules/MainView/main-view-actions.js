import Flux from 'flux-state';
import products from '../Data/products.json';
import * as R from 'ramda';
import { PRODUCT_EVENT, ADD_CART_ERROR, ADD_CART_EVENT, } from './main-view-store.js.js.js.js';
import firebase from 'firebase';



export const getProducts = () =>{

  const DBproducts = R.clone(products);

  Flux.dispatchEvent(PRODUCT_EVENT, DBproducts);

};

export const addToCart = async (product) =>{
  const DB = firebase.firestore();
  const cartCollection = DB.collection('cart');
  let Cart = [];

  await cartCollection.get()
    .then(doc =>{
      doc.forEach((doc) =>{

        Cart.push(doc.data()); 
      });
    });
    
  const {
    price,
    available,
    sublevel_id,
    name,
    id } = product;
    
  const filter = Cart.filter(product => {
    return id === product.id;
  });

  if(filter.length > 0) {
    return Flux.dispatchEvent(ADD_CART_ERROR, "Product " + product.name +" Already in Cart");
  }else{
    
    DB.collection("cart").add({
      quantity : 1,
      price,
      available,
      sublevel_id,
      name,
      id
    })
      .then((doc)=>{
        Flux.dispatchEvent(ADD_CART_EVENT, product.name);
      })
      .catch(e =>{
        Flux.dispatchEvent(ADD_CART_ERROR, e);
      });

    return product.name;
  }
};
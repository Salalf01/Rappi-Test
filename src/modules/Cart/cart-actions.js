import Flux from 'flux-state';
import firebase from 'firebase';
import { FETCH_CART_ERROR, FETCH_CART_EVENT, DELETE_CART_EVENT, DELETE_CART_ERROR } from './cart-store';

export const fetchCartProducts = async () =>{
  const DB = firebase.firestore();
  const cartCollection = DB.collection('cart');
  let Cart = [];
  let product = {};

  await cartCollection.get()
    .then((data) =>{
      data.forEach(doc =>{
        product = doc.data();
        product.docId = doc.id;
        Cart.push(product);
      });
    })
    .catch(e =>{
      Flux.dispatchEvent(FETCH_CART_ERROR, e);
    });
  Flux.dispatchEvent(FETCH_CART_EVENT, Cart);
  return Cart;

};

export const deleteCartProduct = async (id) =>{
  const DB = firebase.firestore();
  const cartCollection = DB.collection('cart').doc(id);

  await cartCollection.delete()

    .then(() =>{
      console.log("Deleted");
      Flux.dispatchEvent(DELETE_CART_EVENT, "Product Succesfully Deleted");

    })
    .catch(e =>{
      Flux.dispatchEvent(DELETE_CART_ERROR, e);
    });
};
import Flux from 'flux-state';
import firebase from 'firebase';
import {  FETCH_CART_EVENT, DELETE_CART_EVENT,  QUANTITY_EVENT,   CART_EVENT_ERROR, BUY_EVENT } from './cart-store';

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
      Flux.dispatchEvent(CART_EVENT_ERROR, e);
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
      Flux.dispatchEvent(CART_EVENT_ERROR, e);
    });
};

export const changeQuantity = async (quantity, id) =>{
  const DB = firebase.firestore();
  const cartCollection = DB.collection('cart').doc(id);

  await cartCollection.update({
    quantity : quantity
  }).then(() =>{
    Flux.dispatchEvent(QUANTITY_EVENT, "Quantity Updated");
  }).catch(e =>{
    Flux.dispatchEvent(CART_EVENT_ERROR, e);
  });
};

export const buyCart = async () =>{
  const DB = firebase.firestore();
  const cartCollection = DB.collection('cart');

  await cartCollection.get()
    .then(data =>{
      data.forEach(async doc =>{
        await cartCollection.doc(doc.id).delete()
          .catch(e =>{
            Flux.dispatchEvent(CART_EVENT_ERROR, e);
          });
      });
      Flux.dispatchEvent(BUY_EVENT, "Buy succesfully done");
    })
    .catch(e =>{
      Flux.dispatchEvent(CART_EVENT_ERROR, e);
    });
};

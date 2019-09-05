import Flux from 'flux-state';
import products from '../../Data/products.json';
import categories from '../../Data/categories.json';
import * as R from 'ramda';
import { PRODUCT_EVENT, ADD_CART_ERROR, ADD_CART_EVENT, CATEGORIES_EVENT,  PRICE_FETCH_EVENT, ORDER_EVENT, SEARCH_EVENT, } from './main-view-store.js';
import firebase from 'firebase';
import { PriceRange, orderOptions }  from '../../Data/Data';


/**
 * Gets all Products in Stock
 */
export const getProducts = async ( category, price, order) =>{
  const DBproducts = R.clone(products.products);
  let filteredProducts = DBproducts;

  // Filters the stock if the user selects one filter
  if(category !== null){
    if(category !== 0){  
      filteredProducts = await filteredProducts.filter(product => category === product.sublevel_id);
    }

  }
  if(price !== null){
    const regex = /(\d+)/g;
    if(price !== '0'){
      let pricesRange = price.match(regex);
      filteredProducts = await filteredProducts.filter(product => 
        Number(product.price.replace(/\D/g,'')) >= ++pricesRange[0] && Number(product.price.replace(/\D/g,'')) <= ++pricesRange[1]);
    }
  }

  // Orders the stock for Price, Available and quantity
  if(order !== null){
    if(order === '1'){
      filteredProducts = filteredProducts.sort((a, b) => {return Number(a.price.replace(/\D/g,'')) - Number(b.price.replace(/\D/g,''));
      });
    }else if(order === '2'){
      filteredProducts = filteredProducts.sort((a, b) => {return b.available - a.available;});
    }else if(order === '3'){
      filteredProducts = filteredProducts.sort((a, b) => {return b.quantity - a.quantity;});
    }
  }

  Flux.dispatchEvent(PRODUCT_EVENT, filteredProducts);

};

export const searchProduct = (name, products, category, prices, order) =>{
  
  if(name !== ''){
    const regex  = RegExp(`${name}`);
    let searchedProduct = products.filter(product => regex.test(product.name)); 
    Flux.dispatchEvent(SEARCH_EVENT, searchedProduct);
  }else{
    getProducts(category, prices, order);
  }
};

/**
 * Gets All the available categories
 */
export const getCategories = async () => {
  
  const DBCategories = await R.clone(categories);

  Flux.dispatchEvent(CATEGORIES_EVENT, DBCategories);
};

/**
 * Gets All Prices to filter
 */
export const getPricesFilter =  () =>{

  const DBPrices =  R.clone(PriceRange);

  Flux.dispatchEvent(PRICE_FETCH_EVENT, DBPrices);
};

/**
 * Gets all the options to list order
 */
export const getOderOptions =  () =>{

  const DBOders =  R.clone(orderOptions);

  Flux.dispatchEvent(ORDER_EVENT, DBOders);
};
/**
 * Adds Product to the Cart
 */
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
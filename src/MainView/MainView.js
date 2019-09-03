import React from 'react';
import MainCarousel from '../Components/MainCarousel';
import { getProducts, addToCart } from './main-view-actions';
import View from 'react-flux-state';
import { productStore, PRODUCT_EVENT, ADD_CART_EVENT } from './main-view-store';
import ProductsList from './components/ProductsList';
import { toast } from 'react-toastify';

    

export default class MainView extends View {
  constructor(props){
    super(props);
    this.state={
      products: [],
    };
 
  }
  componentDidMount(){
    this.subscribe(productStore, PRODUCT_EVENT , (data) =>{
      this.setState({
        products : data.products,
      });
    });
    this.subscribe(productStore, ADD_CART_EVENT, (product) =>{
      toast.success("Product " + product + " Added to Cart");
    });
    getProducts();
  }

  addingToCart = (product) =>{
    addToCart(product);
  }
   
  render() {
    const {products} = this.state;
    return (
        <>           
          <MainCarousel/>
          <ProductsList products ={products} addingToCart={this.addingToCart}/>
       </>
    );
  }
}



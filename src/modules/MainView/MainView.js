import React from 'react';
import MainCarousel from '../../Components/MainCarousel';
import { getProducts, addToCart } from './main-view-actions';
import View from 'react-flux-state';
import { productStore, PRODUCT_EVENT, ADD_CART_EVENT, ADD_CART_ERROR, CATEGORIES_EVENT } from './main-view-store';
import ProductsList from './components/ProductsList';
import { toast } from 'react-toastify';
import Dropdown from '../../Components/Dropdown';

    

export default class MainView extends View {
  constructor(props){
    super(props);
    this.state={
      products: [],
      categories : [],
    };
 
  }
  componentDidMount(){
    this.subscribe(productStore, PRODUCT_EVENT , (data) =>{
      this.setState({
        products : data.products,
      });
    });
    this.subscribe(productStore, CATEGORIES_EVENT, data =>{
      this.setState({
        categories : data,
      });
    });
    this.subscribe(productStore, ADD_CART_EVENT, (name) =>{
      toast.success("Product " + name + " Added to Cart");
    });
    this.subscribe(productStore, ADD_CART_ERROR, (e)=>{
      toast.error(e);
    });
    getProducts();
  }

  addingToCart = (product) =>{
    addToCart(product);
  }
   
  render() {
    const {products, categories} = this.state;
    return (
        <>           
          <MainCarousel/>
          <Dropdown categories ={categories}  />
          <ProductsList products ={products} addingToCart={this.addingToCart}/>
       </>
    );
  }
}



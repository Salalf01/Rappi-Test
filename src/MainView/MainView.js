import React from 'react';
import MainCarousel from '../Components/MainCarousel';
import { getProducts } from './main-view-actions';
import View from 'react-flux-state';
import { productStore, PRODUCT_EVENT } from './main-view-store';
import ProductsList from './components/ProductsList';

    

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
    getProducts();
  }
   
  render() {
    const {products} = this.state;
    return (
        <>           
          <MainCarousel/>
          <ProductsList products = {products}/>
       </>
    );
  }
}



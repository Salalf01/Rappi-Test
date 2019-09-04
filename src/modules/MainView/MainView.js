import React from 'react';
import MainCarousel from '../../Components/MainCarousel';
import { getProducts, addToCart, getCategories, categoryFilter } from './main-view-actions';
import View from 'react-flux-state';
import { productStore, PRODUCT_EVENT, ADD_CART_EVENT, ADD_CART_ERROR, CATEGORIES_EVENT, FILTER_CATEGORY_EVENT } from './main-view-store';
import ProductsList from './components/ProductsList';
import { toast } from 'react-toastify';
import CategoriesDropDown from '../../Components/Dropdown';
import { Loader } from '../../Components/Loader';

    

export default class MainView extends View {
  constructor(props){
    super(props);
    this.state={
      products: [],
      categories : [],
      loading : true,
    };
 
  }
  componentDidMount(){
    this.subscribe(productStore, PRODUCT_EVENT , (data) =>{
      this.setState({
        products : data,
      });
    });
    this.subscribe(productStore, CATEGORIES_EVENT, data =>{
      this.setState({
        categories : data.categories,
        loading: false,
      });
    });
    this.subscribe(productStore, ADD_CART_EVENT, (name) =>{
      toast.success("Product " + name + " Added to Cart");
    });
    this.subscribe(productStore, ADD_CART_ERROR, (e)=>{
      toast.error(e);
    });
    this.subscribe(productStore, FILTER_CATEGORY_EVENT, (data) =>{
      this.setState({
        products : data,
      });
    });

    getProducts();
    getCategories();
  }

  addingToCart = (product) =>{
    addToCart(product);
  }
  getCategory = (category) =>{
    categoryFilter(category);
  }
   
  render() {
    const {products, categories, loading} = this.state;
    return (
      <>         
      {loading ? (<Loader/>) : (
        <>
          <MainCarousel/>
          <CategoriesDropDown categories={categories} onClick={this.getCategory}  />
          <ProductsList products ={products} addingToCart={this.addingToCart}/>
          </>
      )}  
          </>
    );
  }
}



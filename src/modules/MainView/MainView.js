import React from 'react';
import MainCarousel from '../../Components/MainCarousel';
import { getProducts, addToCart, getCategories,  getPricesFilter, getOderOptions, } from './main-view-actions';
import View from 'react-flux-state';
import { productStore, PRODUCT_EVENT, ADD_CART_EVENT, ADD_CART_ERROR, CATEGORIES_EVENT, PRICE_FETCH_EVENT, ORDER_EVENT, } from './main-view-store';
import ProductsList from './components/ProductsList';
import { toast } from 'react-toastify';
import CategoriesDropDown from '../../Components/Dropdown';
import { Loader } from '../../Components/Loader';
import InputSelect from '../../Components/InputSelect';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import SelectOrder from '../../Components/SelectOrder';

    

export default class MainView extends View {
  constructor(props){
    super(props);
    this.state={
      products: [],
      categories : [],
      pricesRange : [],
      orderOptions : [],
      loading : true,
      category: null,
      prices : null,
      order : null,
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
    this.subscribe(productStore, PRICE_FETCH_EVENT, data  =>{
      this.setState({
        pricesRange : data,
      });
    });
    this.subscribe(productStore, ORDER_EVENT, data =>{
      this.setState({
        orderOptions: data
      });

    });
    this.subscribe(productStore, ADD_CART_ERROR, (e)=>{
      toast.error(e);
    });
   
    getPricesFilter();
    getOderOptions();
    getProducts(this.state.category, this.state.prices , this.state.order);
    getCategories();
  }

  addingToCart = (product) =>{
    addToCart(product);
  }
  getCategory = (category) =>{
    const { prices, order } = this.state;
    this.setState({
      category
    });
    getProducts(category, prices, order);
  }
  getPricesFilter = (e) =>{
    const { category, order } = this.state;
    this.setState({
      prices : e.target.value,
    });
    getProducts(category, e.target.value, order);

  }
  getOrder = (e) =>{
    const{ category, prices} = this.state;
    console.log(e.target.value);
    this.setState({
      order : e.target.value
    });
    getProducts(category, prices, e.target.value);

  }
   
  render() {
    const {products, categories, pricesRange, orderOptions, loading} = this.state;
    return (
      <>         
      {loading ? (<Loader/>) : (
        <>
          <MainCarousel/>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <CategoriesDropDown categories={categories} onClick={this.getCategory}  />
              </MDBCol>
              <MDBCol>
                <InputSelect title ={"Selecciona Precio"} options={pricesRange} onChange={this.getPricesFilter}/>
              </MDBCol>
              <MDBCol>
                <SelectOrder title={"Ordenar por:"} options={orderOptions} onChange={this.getOrder}/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <ProductsList products ={products} addingToCart={this.addingToCart}/>
          </>
      )}  
          </>
    );
  }
}



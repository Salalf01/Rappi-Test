import React from 'react';
import View from 'react-flux-state';
import { MDBContainer, MDBRow } from 'mdbreact';
import CartTable from './components/CartTable';
import { cartStore, FETCH_CART_EVENT, FETCH_CART_ERROR, DELETE_CART_EVENT, DELETE_CART_ERROR } from './cart-store';
import { fetchCartProducts, deleteCartProduct } from './cart-actions';
import { Loader } from '../Components/Loader';
import { toast } from 'react-toastify';


export default class Cart extends View {
  constructor(props){
    super(props);
    this.state={
      products : [],
      loading : true,
    };
  }
  componentDidMount(){
    this.subscribe(cartStore, FETCH_CART_EVENT, (data) =>{
      this.setState({
        products: data,
        loading: false,
      });
    });
    this.subscribe(cartStore, FETCH_CART_ERROR, e =>{
      toast.error(e.message);
    });
    this.subscribe(cartStore, DELETE_CART_EVENT , message =>{
      toast.success(message);
      fetchCartProducts();
    });
    this.subscribe(cartStore, DELETE_CART_ERROR, e =>{
      toast.error(e.message);
    });
    fetchCartProducts();
  }

  ViewCartInventory(){
    const { products } = this.state;

    if(products.length === 0){
      return(
        <h1>Empty Cart</h1>
      );
    }else{
      return <CartTable products={products} onClick={this.deleteProduct}/>;
    }
  }
  
  deleteProduct = (id) =>{
    deleteCartProduct(id);
    
  } 
  render() {
    const { loading } = this.state; 
    return (
      <>
        <MDBContainer className="cart-title ">
          <MDBRow>
            <h1>Your Cart</h1>
          </MDBRow>
        </MDBContainer>
      <MDBContainer>
        <MDBRow>          
          {loading ?  <Loader/>: <> {this.ViewCartInventory()}</>
          }
        </MDBRow>
      </MDBContainer>
      </>     
    );
  }
}

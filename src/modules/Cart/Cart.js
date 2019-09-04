import React from 'react';
import View from 'react-flux-state';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import CartTable from './components/CartTable';
import { cartStore, FETCH_CART_EVENT, DELETE_CART_EVENT,  CART_EVENT_ERROR, QUANTITY_EVENT, BUY_EVENT } from './cart-store';
import { fetchCartProducts, deleteCartProduct, changeQuantity, buyCart } from './cart-actions';
import { Loader } from '../../Components/Loader';
import { toast } from 'react-toastify';
import CartResume from './components/cartResume';
import { calculateFinalPrice } from './cart-utils';


export default class Cart extends View {
  constructor(props){
    super(props);
    this.state={
      products : [],
      loading : true,
      totalPrice : 0,
    };
  }
  componentDidMount(){
    this.subscribe(cartStore, FETCH_CART_EVENT, (data) =>{
      let totalPrice = calculateFinalPrice(data);
      this.setState({
        products: data,
        loading: false,
        totalPrice: totalPrice,
      });
    });
    this.subscribe(cartStore, CART_EVENT_ERROR, e =>{
      toast.error(e.message);
    });
    this.subscribe(cartStore, DELETE_CART_EVENT , message =>{
      toast.success(message);
      fetchCartProducts();
    });
 
    this.subscribe(cartStore, QUANTITY_EVENT, message =>{
      toast.success(message);
      fetchCartProducts();
    });
    this.subscribe(cartStore, BUY_EVENT, message =>{
      toast.success(message);
      fetchCartProducts();
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
      return <CartTable products={products} onClick={this.deleteProduct} onChange={this.onChangeQuantity}/>;
    }
  }
  
  deleteProduct = (id) =>{
    deleteCartProduct(id);
    
  } 

  onChangeQuantity = (value , id) =>{
    changeQuantity(value, id);
  }
  onBuyCart = () =>{
    buyCart();
    this.setState({loading : true});
  }
  render() {
    const { loading, totalPrice } = this.state; 
    return (
      <>
      {loading ?  <Loader/>: 
      <>
        <MDBContainer className="cart-title ">
          <MDBRow>
            <h1>Your Cart</h1>
          </MDBRow>
        </MDBContainer>
      <MDBContainer>
        <MDBRow>  
          <MDBCol>
          {this.ViewCartInventory()}
          </MDBCol>
          <MDBCol>
            <CartResume price ={totalPrice} onClick={this.onBuyCart}/>
          </MDBCol>       
        </MDBRow>
      </MDBContainer>
      </>      
      }
      </>     
    );
  }
}

import React, {Component} from 'react';
import { MDBContainer,  MDBCardGroup, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import PropTypes from 'prop-types';


export default class ProductsList extends Component {
  render() {
    const {products, addingToCart} = this.props;
    const productList = products.map(product =>{
      return (
        <MDBCol key={product.id} size='4' className="product-card">
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText >
                {`Price: ${product.price}`}
              </MDBCardText>
              <MDBCardText>
                {` Quantity:  ${product.quantity}`}
              </MDBCardText>
              <MDBCardText>
                {product.available ? "Available" : "Not Available"}
              </MDBCardText>
              <MDBBtn className='justify-content-end' onClick={() => addingToCart(product)}>
                <MDBIcon icon="shopping-cart" />
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    });
    return (
           <>
           <MDBContainer className="products-list">
             <MDBCardGroup>
               {productList}
             </MDBCardGroup>
           
           </MDBContainer>
           </>
    );
  }
}

ProductsList.propTypes = {
  products : PropTypes.array.isRequired,
  addingToCart : PropTypes.func.isRequired,
};

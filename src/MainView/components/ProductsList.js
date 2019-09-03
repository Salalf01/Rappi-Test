import React, {Component} from 'react';
import { MDBContainer,  MDBCardGroup, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import PropTypes from 'prop-types';


export default class ProductsList extends Component {
  render() {
    const {products} = this.props;
    const productList = products.map(product =>{
      return (
        <MDBCol key={product.id} size='4' className="product-card">
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody className='elegant-color white-text rounded-bottom'>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText className='elegant-color white-text rounded-bottom'>
                {product.price}
              </MDBCardText>
              <MDBBtn className='justify-content-end'>
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
};

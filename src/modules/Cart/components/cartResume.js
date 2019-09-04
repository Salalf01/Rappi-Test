import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import PropTypes from 'prop-types';

export default class CartResume extends Component {

  render() {
    const {price, onClick} = this.props;
    return (
      <MDBContainer className="cart-resume">
        <MDBRow className="resume-content">
          <MDBCol>
            <h1>Total:</h1>
          </MDBCol>
          <MDBCol>
            <h1>{price}</h1>
          </MDBCol>
        </MDBRow>
        <MDBRow className="cart-btn">
          <MDBCol>
            <hr/>
            <MDBBtn color="success" onClick={onClick}>Buy</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

CartResume.propTypes ={
  price : PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

CartResume.defaultProps = {
  price : 0,
};

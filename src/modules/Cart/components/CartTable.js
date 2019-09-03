import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';

export default class CartTable extends Component {

  render() {

    const { products, onClick } = this.props;

    const tableProducts = products.map(product =>{
      return(  
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.id}</td>
          <MDBBtn color="danger" onClick={() => onClick(product.docId)}>Delete</MDBBtn>
        </tr>
            
      );
    });

    return (
      <MDBTable responsive>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>ID</th>
            <th></th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {tableProducts}
        </MDBTableBody>
      </MDBTable>
      
    );
  }
}

CartTable.propTypes = {
  products : PropTypes.array,
  onClick : PropTypes.func.isRequired,
};

CartTable.defaultProps = {
  products : [],
};

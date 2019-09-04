import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import InputNumber from '../../../Components/InputNumber';

export default class CartTable extends Component {

  render() {

    const { products, onClick, onChange } = this.props;

    const tableProducts = products.map(product =>{
      return(  
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.id}</td>
          <td><InputNumber value={product.quantity} id={product.docId} onChange={onChange}/></td>
          <MDBBtn color="danger" onClick={() => onClick(product.docId)}>Delete</MDBBtn>
        </tr>
            
      );
    });

    return (
      <div className="cart-table">
        <MDBTable responsive >
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>ID</th>
              <th>Quantity</th>
              <th> </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {tableProducts}
          </MDBTableBody>
        </MDBTable>
      </div>
      
    );
  }
}

CartTable.propTypes = {
  products : PropTypes.array,
  onClick : PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

CartTable.defaultProps = {
  products : [],
};

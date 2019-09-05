import React,  { Component } from "react";
import {  MDBFormInline, MDBIcon } from "mdbreact";
import  PropTypes from 'prop-types';

export default class InputSearch extends Component {

  render(){
    const {onChange} = this.props;
    return (
      <MDBFormInline className="search-input md-form">
        <MDBIcon icon="search" />
        <input className="  form-control form-control-sm ml-3 w-75" type="text" onChange={onChange} placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    );
  }
};

InputSearch.propTypes ={
  onChange : PropTypes.func.isRequired,
};






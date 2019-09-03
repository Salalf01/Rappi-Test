import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,  MDBIcon } from "mdbreact";
    

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen : false,
    };    
  }
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
      return (
            <>
                    <MDBNavbar color="unique-color-dark" dark expand="md">
                      <MDBNavbarBrand>
                        <strong className="white-text">Rappi Test</strong>
                      </MDBNavbarBrand>
                      <MDBNavbarToggler onClick={this.toggleCollapse} />
                      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                          <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                          </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                          <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="/cart">
                              <MDBIcon icon="shopping-cart" />
                            </MDBNavLink>
                          </MDBNavItem>
                        </MDBNavbarNav>
                      </MDBCollapse>
                    </MDBNavbar>
                    </>
      );
    }
}

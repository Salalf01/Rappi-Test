import React, { Component } from 'react';
import MainCarousel from '../Components/MainCarousel';

    

export default class MainView extends Component {
  constructor(props){
    super(props);
    this.state={
      lol : 1,
    };
 
  }
   
  render() {
    return (
        <>           
          <MainCarousel/>
       </>
    );
  }
}



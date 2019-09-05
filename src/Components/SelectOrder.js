import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectOrder extends Component {
  getOptions = (title, options, onChange) =>{

    return( 
      <div>
        <select className=" input-select-order browser-default custom-select" onChange={onChange}>
          <option value={0}>{ title }</option>
          {options.map(option =>{
            return(
              <option key={option.value} value={option.value}>{option.name}</option>
            );
          })
          }
        </select>
      </div>
    );
  }
  render () {

    const {title, options, onChange } = this.props;
    return(
      <>
     {this.getOptions(title, options, onChange)}
     </>
    );
  }
}

SelectOrder.propTypes ={
  title : PropTypes.string,
  onChange : PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

SelectOrder.defaultProps ={
  title : 'Selecciona Orden',
};



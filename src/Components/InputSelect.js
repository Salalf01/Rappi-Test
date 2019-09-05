import React, { Component } from 'react';
import propTypes from 'prop-types';

class InputSelect extends Component {
    getOptions = (title, options, onChange) =>{
      return( 
        <div>
          <select className=" input-select browser-default custom-select" onChange={onChange}>
            <option value={0}>{ title }</option>
            {options.map(option =>{
              return(
                <option key={option.minor} value={`${option.minor} - ${option.major}`} >{`${option.minor} - ${option.major}`}</option>
              );
            })
            }
          </select>
        </div>
      );
    }
    render () {
      const { title, options, onChange } = this.props;
      return(
          <>
          {this.getOptions(title, options, onChange)}
          </>
       
      );
    }
}

InputSelect.propTypes = {
  title : propTypes.string,
  options : propTypes.array.isRequired,
  onChange : propTypes.func.isRequired,
};

InputSelect.defaultProps = {
  title : "Selecciona Opcion",
};

export default InputSelect;
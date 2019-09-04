import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./index.css";

class InputNumber extends Component {
    state={
      value : this.props.value,
    }
  

  decrease = () => {
    let value = this.state.value;
    value = value - 1;
    this.props.onChange(value, this.props.id);
    this.setState({ value });
  }

  increase = () => {
    let value = this.state.value;
    value = value + 1;
    this.props.onChange(value, this.props.id);
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="def-number-input number-input">
        <button onClick={this.decrease} className="minus"></button>
        <input className="quantity" name="quantity" value={value} onChange={()=> console.log('change')}
          type="number" />
        <button onClick={this.increase} className="plus"></button>
      </div>
    );
  }
}
InputNumber.propTypes = {
  value : PropTypes.number,
  onChange: PropTypes.func.isRequired,
  id : PropTypes.string.isRequired,
};
InputNumber.defaultProps = {
  value : 0,
};


export default InputNumber;
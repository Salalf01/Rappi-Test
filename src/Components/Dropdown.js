import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
  render() {
    const { categories, categoryText } = this.props;
    const dropDownCategories = (categories, name, isFirst) => (
      <Dropdown text={name} pointing className="category-dropdown link item">
        <Dropdown.Menu>
          {isFirst && <Dropdown.Item onClick={() => onclick} >All</Dropdown.Item>}
          {isFirst = false}
          {categories.map(category => {
            if (category.sublevels)
              return (
                <Dropdown.Item key={category.id}>
                  {dropDownCategories(category.sublevels, category.name)}
                </Dropdown.Item>
              );
            return (
              <Dropdown.Item
                className="leave"
                onClick={() => onclick}
                key={category.id}
              >
                {category.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
    return (
      <div className="categories-list">
        {dropDownCategories(Object.values(categories), categoryText, true)}
      </div>
    );
  };
}

Dropdown.propTypes = {
  categories : PropTypes.object.isRequired,
  categoryText: PropTypes.string,
};
Dropdown.defaultProps = {
  categoryText: 'All',
};

  

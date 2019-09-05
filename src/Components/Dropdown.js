import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';


export default class CategoriesDropDown extends Component {
 
   dropDownCategories = (categories, name, isFirst, onClick) => {
     return (
       <Dropdown text={name} pointing className="category-dropdown link item">
         <Dropdown.Menu>
           {isFirst && <Dropdown.Item className="category-first" onClick={() => onClick(0)} >Todo</Dropdown.Item>}
           {isFirst = false}
           {categories.map(category => {
             if (category.sublevels)
               return (
                 <Dropdown.Item key={category.id} onClick={() => this.props.onClick(category.id)}>
                   {this.dropDownCategories(category.sublevels, category.name)}
                 </Dropdown.Item>
               );
             return (
               <Dropdown.Item
                 className="category-first"
                 onClick={() => this.props.onClick(category.id)}
                 key={category.id}
               >
                 {category.name}
               </Dropdown.Item>
             );
           })}
         </Dropdown.Menu>
       </Dropdown>
     );
   };

   render() {
     const { categories, onClick } = this.props;
     return (
       <div className="categories-list">
         {this.dropDownCategories(Object.values(categories), "Categorias", true, onClick)}
       </div>
     );
   }
}

CategoriesDropDown.propTypes = {
  categories : PropTypes.array.isRequired,
  onClick : PropTypes.func.isRequired
};

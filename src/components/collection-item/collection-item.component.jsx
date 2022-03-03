import React from 'react';
// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component.jsx';
import { addItem } from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  
  const { name, price, imageUrl } = item;

  return(
    <div className="collection-item">
      
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}  
      >
        {/* <Link className="button" inverted to='/beepboop,addingitemtocart'>
          <span>ADD TO CART</span><br></br>
          <span style={{fontSize: 10}}>(work in progress)</span>
        </Link> */}
      </div>
      

      <div className='collection-footer'>
        <span className='name'>{ name }</span>
        <span className='price'>{ price }$</span>
      </div>

      <CustomButton 
        onClick={ () => addItem(item) } 
        whitened
      >
        ADD TO CART
      </CustomButton>

    </div>
  )

};

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
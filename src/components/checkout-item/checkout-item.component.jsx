import React from 'react';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { addItem, removeItem, substractItem } from '../../redux/cart/cart.actions.js';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, substractItem }) => {
  
  const { imageUrl, name, quantity, price } = cartItem;
  
  return(
    <div className='checkout-item'>
      
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>

      <span className='name'>
        {name}
      </span>

      <span className='quantity'>
        <div className='arrow' onClick={ () => substractItem(cartItem) }> &#10094; </div>
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={ () => addItem(cartItem) }> &#10095; </div>
      </span>

      <span className='price'>
        {price}
      </span>
      
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>

    </div>

)};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
// });

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  substractItem: item => dispatch(substractItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

// export default CheckoutItem;
import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    
    <div className='cart-items'>
      {
        cartItems.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))
      }
    </div>
    
    <CustomButton inverted > GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>product</div>
      <div className='header-block'>description</div>
      <div className='header-block'>quantity</div>
      <div className='header-block'>price</div>
      <div className='header-block'>remove</div>
    </div>

    {
      cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }

    <div className='total'>TOTAL: ${cartTotal}</div>
  </div>
);



const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
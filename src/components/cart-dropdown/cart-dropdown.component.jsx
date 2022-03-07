import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className='cart-dropdown'>
    
    {
      cartItems.length ? 
      (
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))}
        </div>
      )
      :
      ( <span className='empty-message'>YOUR CART IS EMPTY</span> )
    }
    
    <CustomButton onClick={() => {
      history.push('/checkout'); 
      toggleCartHidden();
    }} inverted>
       GO TO CHECKOUT 
    </CustomButton>

  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
}); 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;
// const selectTotal = (state) => (state.cartItems.map((item) => (item.quantity * item.price)));

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumulatedQuantity, cartItem) => 
    accumulatedQuantity + (cartItem.quantity * cartItem.price), 0
  )
);
import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ 
  children, 
  isGoogleSignIn, 
  inverted,
  whitened, 
  ...otherButtonProps 
}) => (
  <button 
    className={`
      ${isGoogleSignIn ? 'google-sign-in': ''}
      ${inverted ? 'inverted': ''}
      ${whitened ? 'whitened': ''}
      custom-button
    `} 
    {...otherButtonProps}>
    {children}
  </button>
);

export default CustomButton;
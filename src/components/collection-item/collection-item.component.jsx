import React from 'react';
// import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component.jsx';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => (
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

    <CustomButton className='custom-button' inverted>ADD TO CART</CustomButton>

  </div>
);

export default CollectionItem;
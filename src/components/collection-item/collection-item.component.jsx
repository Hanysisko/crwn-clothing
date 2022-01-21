import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => (
  <div className="collection-item">
    
    <div 
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}  
    >
      <Link className="button" to='/beepboop,addingitemtocart'>
        <span>ADD TO CART</span><br></br>
        <span style={{fontSize: 10}}>(back to homepage for now)</span>
      </Link>
    </div>
    

    <div className='collection-footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>

  </div>
);

export default CollectionItem;
import React from 'react';

import './menu-item.styles.scss';

export const MenuItem = props => (

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>{props.menuit.title}</h1>
          <span className='subtitle'>{props.menuit.subtitle}</span>
        </div>
      </div>

)
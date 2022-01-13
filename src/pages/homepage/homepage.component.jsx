import React from 'react';

import { MenuItem } from '../../components/menu-item/menu-item.component.jsx';
import './homepage.styles.scss';

export const HomePage = props => (
  
  <div className='homepage'>
    <div className='directory-menu'>
      
      {props.homepageprop.map(menuit => (
        <MenuItem key={menuit.title} menuit={menuit} />
      ))}

    </div>
  </div>

)
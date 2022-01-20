import React from 'react';
import { withRouter } from 'react-router-dom'
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = ({ history }) => (
  
  <div className='homepage'>
    <button onClick={() => history.push('/crwn-clothing/shop')}>*test* GO TO SHOP *test*</button>
    <Directory/>
  </div>

);

export default withRouter(HomePage);

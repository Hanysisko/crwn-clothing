import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component.jsx'
import SignUp from '../../components/sign-up/sign-up.component.jsx'

import './signin-signup-page.styles.scss';

const SignInUpPage = () => (
  
  <div className='signinuppage'>
    <SignIn/>
    <SignUp/>
  </div>

);

export default SignInUpPage;



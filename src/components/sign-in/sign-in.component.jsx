import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword( email, password );
      this.setState({ email: '', password: ''});
    } catch(err){
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  };

  render(){
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email'
            label='email'
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
          />

          <FormInput 
            name='password' 
            type='password' 
            label='password'
            value={this.state.password} 
            handleChange={this.handleChange}
            required 
          />

          <div className='buttons'>
            <CustomButton type='submit'>
              sign in
            </CustomButton>

            <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn >
              sign in with google
            </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
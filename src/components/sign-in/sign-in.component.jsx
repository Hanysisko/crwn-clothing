import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '',});
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
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

          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
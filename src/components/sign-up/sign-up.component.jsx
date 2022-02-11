import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';



class SignUp extends Component {
  constructor(){
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      
      const { user } = await auth.createUserWithEmailAndPassword(
        email, password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch(err) {
      console.error(err);
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }


  render(){
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='text' 
            type='displayName'
            label='display name'
            value={displayName} 
            handleChange={this.handleChange}
            required 
          />
          
          <FormInput 
            name='email' 
            type='email'
            label='email'
            value={email} 
            handleChange={this.handleChange}
            required 
          />

          <FormInput 
            name='password' 
            type='password' 
            label='password'
            value={password} 
            handleChange={this.handleChange}
            required 
          />

          <FormInput 
            name='confirmPassword' 
            type='password' 
            label='confirm password'
            value={confirmPassword} 
            handleChange={this.handleChange}
            required 
          />

          <div className='buttons'>
            <CustomButton type='submit'>
              sign up
            </CustomButton>
          </div>
          
        </form>
      </div>
    )
  }
}

export default SignUp;
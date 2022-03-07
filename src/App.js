import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css'

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';
import SignInUpPage from './pages/signin-signup-page/signin-signup-page.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import { selectCurrentUser } from '../src/redux/user/user.selectors.js';


import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';

export const WorkInProgress = ({ history }) => (
  <div>
    <h1>Sorry, not done yet!</h1>
    <p>For now, please ignore this place and have fun somewhere else!</p>
    <button onClick={() => history.push('/')}>GO BACK TO THE HOMEPAGE</button>
  </div>
);

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else { setCurrentUser(userAuth); }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return(
      <div>
        
        <Header/>

        <Switch>
          
          <Route exact path={'/crwn-clothing'} component={ HomePage }>
            <Redirect to={'/'}/>
          </Route>
          <Route exact path={'/'} component={ HomePage }/>
          <Route exact path={'/shop'} component={ ShopPage }/>
          <Route exact path={'/checkout'} component={ CheckoutPage }/>
          <Route 
            exact path={'/signin'} 
            render={() => 
              this.props.currentUser ? (
                <Redirect to={'/'} />
              ) : (
                <SignInUpPage/>
              )
            }
          />

          {/* <Route exact path='/signin' render={() =>
            <Fragment>
              <WorkInProgress/>
              <SignInUpPage/>
            </Fragment>
          }/> */}

          <Route component={ WorkInProgress }/>

        </Switch>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

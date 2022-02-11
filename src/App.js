import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';
import SignInUpPage from './pages/signin-signup-page/signin-signup-page.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

export const WorkInProgress = ({history}) => (
  <div>
    <h1>Sorry, not done yet!</h1>
    <p>For now, please ignore this place and have fun somewhere else!</p>
    <button onClick={() => history.push('/')}>GO BACK TO THE HOMEPAGE</button>
  </div>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
        currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
        });
      } else { this.setState({ currentUser: userAuth }); }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return(
      <div>
        
        <Header currentUser={this.state.currentUser}/>

        <Switch>
          
          <Route exact path={'/crwn-clothing'} component={ HomePage }>
            <Redirect to={'/'}/>
          </Route>
          <Route exact path={'/'} component={ HomePage }/>
          <Route exact path={'/shop'} component={ ShopPage }/>
          <Route path={'/signin'} component={ SignInUpPage }/>
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

export default App;

import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';
import SignInUpPage from './pages/signin-signup-page/signin-signup-page.component.jsx';

export const WorkInProgress = ({history}) => (
  <div>
    <h1>Sorry, not done yet!</h1>
    <p>For now, please ignore this place and have fun somewhere else!</p>
    <button onClick={() => history.push('/')}>GO BACK TO THE HOMEPAGE</button>
  </div>
);

class App extends Component {
  // constructor() {
  //   super();
  // };
  
  render() {
    return(
      <div>
        
        <Header/>

        <Switch>
          
          <Route exact path={'/crwn-clothing'} component={ HomePage }>
            <Redirect to={'/'}/>
          </Route>
          <Route exact path={'/'} component={ HomePage }/>
          <Route path={'/shop'} component={ ShopPage }/>
          {/* <Route path={'/signin'} component={ WorkInProgress, SignInUpPage }/> */}
          <Route path='/signin' render={() =>
            <Fragment>
              <WorkInProgress/>
              <SignInUpPage/>
            </Fragment>
          }/>

          <Route component={ WorkInProgress }/>

        </Switch>

      </div>
    );
  }
}

export default App;

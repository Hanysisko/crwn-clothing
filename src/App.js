import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';

class App extends Component {
  // constructor() {
  //   super();
  // };
  
  render() {
    return(
      <div>
        <Header/>

        <Switch>
          <Route exact path={'/crwn-clothing'} component={ HomePage }/>
          <Route exact path={'/crwn-clothing/shop'} component={ ShopPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;

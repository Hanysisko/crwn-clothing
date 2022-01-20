import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends Component {
  constructor() {
    super();
  };
  
  render() {
    return( 
      <div className="App">
        <Switch>
          <Route exact path={'/crwn-clothing'} component={ HomePage }/>
          <Route exact path={'/crwn-clothing/shop/hats'} component={ HatsPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;

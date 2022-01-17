import React, { Component } from 'react';
import { Route } from 'react-router-dom'
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
        <Route exact path={'/crwn-clothing'} component={ HomePage }/>
        <Route exact path={'/hats'} component={ HatsPage }/>
      </div>
    );
  }
}

export default App;

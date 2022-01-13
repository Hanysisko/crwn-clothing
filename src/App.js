import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuitem: [
        {
          "title": "HATS",
          "subtitle": "SHOP NOW",
          "url": "",
        },
        {
          "title": "SHOES",
          "subtitle": "SHOP NOW",
          "url": "",
        },
        {
          "title": "SHIRTS",
          "subtitle": "SHOP NOW",
          "url": "",
        },
        {
          "title": "PANTS",
          "subtitle": "SHOP NOW",
          "url": "",
        },
        {
          "title": "SOCKS",
          "subtitle": "SHOP NOW",
          "url": "",
        },
      ],
    };
  }

  render() {
    const menuItem = this.state.menuitem;

    return (
      <div className="App">

        <HomePage 
          homepageprop={menuItem}
        />

      </div>
    );
  }
}

export default App;

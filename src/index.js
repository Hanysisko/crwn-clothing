import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>  
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
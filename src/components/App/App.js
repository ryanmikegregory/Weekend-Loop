import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import axios from 'axios';

import './App.css';
import FeelingsPage from '../Pages/FeelingsPage/FeelingsPage';
import UnderstandPage from '../Pages/UnderstandPage/UnderstandPage';
import SupportPage from '../Pages/SupportPage/SupportPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <Router>
          <Route exact path="/" component={FeelingsPage} />
          <Route exact path="/understanding" component={UnderstandPage} />
          <Route exact path="/support" component={SupportPage} />
        </Router>
      </div>
    );
  }
}

export default App;

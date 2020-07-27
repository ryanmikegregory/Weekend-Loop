import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// import axios from 'axios';

// TODO SETUP ROUTER FOR 6 PAGES

import './App.css';
import FeelingsPage from '../Pages/FeelingsPage/FeelingsPage';
import UnderstandPage from '../Pages/UnderstandPage/UnderstandPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentPage from '../Pages/CommentPage/CommentPage';
import ReviewPage from '../Pages/ReviewPage/ReviewPage';
import ThankYouPage from '../Pages/ThankYouPage/ThankYouPage';

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
          <Route exact path="/comments" component={CommentPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/thank-you" component={ThankYouPage} />
        </Router>
      </div>
    );
  }
}

export default App;

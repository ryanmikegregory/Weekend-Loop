import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO FORM and NEXT BTN and dispatch
class LandingPage extends Component {
  onLandingNextClick = (event) => {
    this.props.history.push('/feeling');
  };
  render() {
    return (
      <div>
        <h2>Click Next to Leave Feedback!</h2>

        <button onClick={this.onLandingNextClick}>NEXT</button>
      </div>
    );
  }
}

export default LandingPage;

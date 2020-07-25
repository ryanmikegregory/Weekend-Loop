import React, { Component } from 'react';

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

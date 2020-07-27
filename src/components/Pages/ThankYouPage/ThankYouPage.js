import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends Component {
  onThankYouPageClickNew = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Thank You Page</h1>
        <button onClick={this.onThankYouPageClickNew}>
          Leave New Feedback
        </button>
      </div>
    );
  }
}

export default connect()(ThankYouPage);

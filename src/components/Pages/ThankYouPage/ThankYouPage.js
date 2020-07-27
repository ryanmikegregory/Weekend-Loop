import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends Component {
  render() {
    return (
      <div>
        <h1>Thank You Page</h1>
      </div>
    );
  }
}

export default connect()(ThankYouPage);

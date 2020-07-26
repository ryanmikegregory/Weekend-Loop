import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO dispatch and each state import and Submit btn & map
class ReviewPage extends Component {
  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <br />
        <p>Test</p>
        <p> </p>
      </div>
    );
  }
}

const mapToStoreProps = (store) => ({ store });

export default connect(mapToStoreProps)(ReviewPage);

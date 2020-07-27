import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO dispatch and each state import and Submit btn & map
class ReviewPage extends Component {
  onReviewPageClickSubmit = () => {
    this.props.history.push('/thank-you');
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <br />
        <p>Test</p>
        <p> </p>
        <button onClick={this.onReviewPageClickSubmit}>SUBMIT</button>
      </div>
    );
  }
}

const mapToStoreProps = (store) => ({ store });

export default connect(mapToStoreProps)(ReviewPage);

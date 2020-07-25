import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO dispatch and each state import and Submit btn & map
class ReviewPage extends Component {
  render() {
    console.log(this.props.store);
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <br />
      </div>
    );
  }
}

const mapToStoreProps = (store) => ({ store });

export default connect(mapToStoreProps)(ReviewPage);

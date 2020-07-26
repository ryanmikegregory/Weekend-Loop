import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO FORM and NEXT BTN and dispatch
class UnderstandPage extends Component {
  state = {
    understanding: '',
  };
  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onUnderstandingNextClick = (type) => {
    this.props.dispatch({
      type: 'SET_UNDERSTANDING_RATING',
      payload: this.state,
    });
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <input
          type="number"
          min="1"
          max="5"
          onChange={this.onInputChange('understanding')}
        />
        <button onClick={this.onUnderstandingNextClick}>NEXT</button>
      </div>
    );
  }
}

const mapToStoreProps = (store) => ({ store });

export default connect(mapToStoreProps)(UnderstandPage);

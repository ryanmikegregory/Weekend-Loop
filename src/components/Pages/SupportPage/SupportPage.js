import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO FORM and NEXT BTN and dispatch
class SupportPage extends Component {
  state = {
    support: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onSupportNextClick = (type) => {
    this.props.dispatch({
      type: 'SET_SUPPORT_RATING',
      payload: this.state,
    });
    console.log(this.state);
    // this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <input
          type="number"
          min="1"
          max="5"
          onChange={this.onInputChange('support')}
        />
        <button onClick={this.onSupportNextClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(SupportPage);

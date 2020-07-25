import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO FORM and NEXT BTN and dispatch
class FeelingsPage extends Component {
  state = {
    feelings: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onFeelingsNextClick = (type) => {
    this.props.dispatch({ type: 'SET_FEELINGS_RATING', payload: this.state });
    this.props.history.push('/understanding');
  };
  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <input
          type="number"
          min="1"
          max="5"
          onChange={this.onInputChange('feelings')}
        />
        <button onClick={this.onFeelingsNextClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(FeelingsPage);

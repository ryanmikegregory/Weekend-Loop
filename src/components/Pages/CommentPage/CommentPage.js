import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO FORM and NEXT BTN and dispatch
class CommentPage extends Component {
  
  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onCommentsNextClick = (type) => {
    this.props.dispatch({
      type: 'SET_COMMENT_VALUE',
      payload: this.state,
    });
    this.props.history.push('/review');
  };

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <input
          type="text"
          placeholder="Comments"
          size="100"
          onChange={this.onInputChange('comments')}
        />
        <button onClick={this.onCommentsNextClick}>NEXT</button>
      </div>
    );
  }
}

const mapToStoreProps = (store) => ({ store });

export default connect(mapToStoreProps)(CommentPage);

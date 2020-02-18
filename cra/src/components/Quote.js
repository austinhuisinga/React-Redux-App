import React from 'react';
import { connect } from 'react-redux';

import { fetchYe } from '../actions';

const Quote = props => {
  return (
    <div>
      <button onClick={props.fetchYe}>Find Wisdom</button>
      {!props.quote && !props.isLoading && (
        <h2>Hear from Yeezus.</h2>
      )}
      {props.isLoading && (
        <h1>Chill bro</h1>
      )}
      {props.quote && !props.isLoading && <h2>{props.quote}</h2>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchYe })(Quote);
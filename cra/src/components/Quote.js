import React from 'react';
import { connect } from 'react-redux';
import pablo from '../pablo.jpg';

import { 
  YeImg,
  QuoteDiv,
  QuoteButton,
  QuoteDiv2
} from '../stylez';
import { fetchYe } from '../actions';

const Quote = props => {
  return (
    <QuoteDiv>
      <YeImg src={pablo} />
      <QuoteButton onClick={props.fetchYe}>Find Wisdom</QuoteButton>
      <QuoteDiv2>
        {!props.quote && !props.isLoading && (
          <h2>Hear from Yeezus.</h2>
        )}
        {props.isLoading && (
          <p>chill...</p>
        )}
        {props.quote && !props.isLoading && <h2>{props.quote}</h2>}
      </QuoteDiv2>
    </QuoteDiv>
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
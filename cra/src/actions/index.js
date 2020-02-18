import axios from 'axios';

export const FETCHING_YE_START = 'FETCHING_YE_START';
export const FETCHING_YE_SUCCESS = 'FETCHING_YE_SUCCESS';
export const FETCHING_YE_FAILURE = 'FETCHING_YE_FAILURE';

const yeAPI = 'https://api.kanye.rest/';

export const fetchYe = () => dispatch => {
  dispatch({ type: FETCHING_YE_START });
  axios
    .get(yeAPI)
    .then(res => {
      console.log(res.data.quote);
      dispatch({ type: FETCHING_YE_SUCCESS, payload: res.data.quote });
    })
    .catch(err => {
      dispatch({ type: FETCHING_YE_FAILURE, payload: err.res.data.quote })
    });
};
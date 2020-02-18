import {
  FETCHING_YE_START,
  FETCHING_YE_SUCCESS,
  FETCHING_YE_FAILURE,
} from '../actions';

const initialState = {
  isLoading: false,
  quote: null,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_YE_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCHING_YE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quote: action.payload,
      };
    default:
      return state;
  }
};
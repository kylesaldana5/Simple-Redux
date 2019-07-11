import { FETCH_CUSTOMERS_BEGIN,  FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE } from '../actions/index';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function customerReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CUSTOMERS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CUSTOMER_SUCCESS:
      // Set loading "false".
      // Replace the items with the ones from the request
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case FETCH_CUSTOMER_FAILURE:
      // The request failed. Set loading to "false".
      // Save the error, display it somewhere.
      // Since it failed,  set `items` empty.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
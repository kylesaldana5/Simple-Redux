import {fetchCustomersBegin, fetchCustomersSuccess, fetchCustomersFailure} from './index';

export function fetchCustomers() {
    return dispatch => {
      dispatch(fetchCustomersBegin());
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCustomersSuccess(json));
          return json.customers;
        })
        .catch(error => dispatch(fetchCustomersFailure(error)));
    };
  }
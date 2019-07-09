export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export const fetchCustomersBegin = () => ({
  type: FETCH_CUSTOMERS_BEGIN
});

export const fetchCustomersSuccess = customers => ({
  type: FETCH_CUSTOMER_SUCCESS,
  payload: { customers }
});

export const fetchCustomersFailure = error => ({
  type: FETCH_CUSTOMER_FAILURE,
  payload: { error }
});


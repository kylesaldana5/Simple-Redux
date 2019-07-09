import axios from "axios";
import { SET_CUSTOMER_DETAILS } from "./types";

export function fetchCustomerDetails() {
  return function(dispatch) {
    return axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch(setCustomerDetails(data));
    });
  };
}

function setCustomerDetails(data) {
  return {
    type: SET_CUSTOMER_DETAILS,
    payload: data
  };
}
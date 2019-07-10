import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from "./containers/App";
import store from "./js/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App  />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
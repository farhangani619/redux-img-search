import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise-middleware";

import { reducer } from "./store";

import App from "./App";

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

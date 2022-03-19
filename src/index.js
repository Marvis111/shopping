import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/**css */
import "./index.css";
/**end css */
import {  Provider} from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
/**
 * 
 *     <script src="assets/js/jquery-2.2.4.min.js"></script>
    <!-- Popper js -->
    <script src="assets/js/popper.min.js"></script>
    <!-- Bootstrap js -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- Plugins js -->
    <script src="assets/js/plugins.js"></script>
    <!-- Classy Nav js -->
    <script src="assets/js/classy-nav.min.js"></script>
    <!-- Active js -->
    <script src="assets/js/active.js"></script>
 * 
 */

const store = createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

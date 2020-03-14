import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers"
import {Provider} from "react-redux"

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



//ACTION: describes what you want to do e.g; increment or decrement
//a function that returns an object

// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   };
// };

//REDUCER: describes how your ACTION transforms a current state into the next/another state

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default: 
//   }
// };


//STORE: which is a globalized state that holds all the state or data for application
// let store = createStore(counter);

//DISPATCH: its a way to execute that ACTION
// store.dispatch(increment())
// store.dispatch(decrement())


//Provider connects our global state to our whole App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

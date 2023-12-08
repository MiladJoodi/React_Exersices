import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./component/Reducer";

const store = createStore(Reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

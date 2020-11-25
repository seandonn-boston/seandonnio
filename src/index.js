import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";

import App from "./app/App";

import "./index.global.scss";

import { MobileContextProvider } from "./global/context/mobile-context";

ReactDOM.render(
  <Provider store={store}>
    <MobileContextProvider>
      <App />
    </MobileContextProvider>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";

import { App } from "./app/App";

import { ClientContextProvider } from "./global/context/clientContext";

import "./index.global.scss";

ReactDOM.render(
  <Provider store={store}>
    <ClientContextProvider>
      <App />
    </ClientContextProvider>
  </Provider>,
  document.getElementById("root")
);

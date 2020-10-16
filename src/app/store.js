// store.js
// creates the Redux store instance

import { configureStore } from "@reduxjs/toolkit";

import veilReducer from "./Veil/veilSlice";
import navLinksReducer from "./Navigation/NavLinks/navLinksSlice";
import clientReducer from "../global/slices/clientSlice";
import burgerReducer from "../global/ui/Burger/burgerSlice";

export default configureStore({
  reducer: {
    client: clientReducer,
    veil: veilReducer,
    navLinks: navLinksReducer,
    burger: burgerReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";

import clientReducer from "../global/slices/clientSlice";
import veilReducer from "./Veil/veilSlice";
import modalReducer from "./Modal/modalSlice";
import navLinksReducer from "./Navigation/NavLinks/navLinksSlice";
import burgerReducer from "../global/ui/Burger/burgerSlice";

export default configureStore({
  reducer: {
    client: clientReducer,
    veil: veilReducer,
    modal: modalReducer,
    navLinks: navLinksReducer,
    burger: burgerReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";

import clientReducer from "../global/slices/clientSlice";
import veilReducer from "./Veil/veilSlice";
import modalReducer from "./Modal/modalSlice";
import navigationItemsReducer from "./Navigation/NavigationItems/navigationItemsSlice";
import burgerReducer from "../global/ui/Burger/burgerSlice";

export default configureStore({
  reducer: {
    client: clientReducer,
    veil: veilReducer,
    modal: modalReducer,
    navigationItems: navigationItemsReducer,
    burger: burgerReducer,
  },
});

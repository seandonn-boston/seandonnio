import { configureStore } from "@reduxjs/toolkit";

import veilReducer from "./Veil/veilSlice";
import modalReducer from "./Modal/modalSlice";
import navigationItemsReducer from "./Navigation/NavigationItems/navigationItemsSlice";

export default configureStore({
  reducer: {
    veil: veilReducer,
    modal: modalReducer,
    navigationItems: navigationItemsReducer,
  },
});

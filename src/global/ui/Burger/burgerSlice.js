// Import
import { createSlice } from "@reduxjs/toolkit";

import {
  navigationItemsClosed,
  navigationItemsOpened,
} from "../../../app/Navigation/NavigationItems/navigationItemsSlice";
import { modalOpened } from "../../../app/Modal/modalSlice";

// Slice
export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isActive: false,
  },
  reducers: {
    burgerActivated(state) {
      state.isActive = true;
    },
    burgerDeactivated(state) {
      state.isActive = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(navigationItemsClosed, (state) => {
        state.isActive && (state.isActive = false);
      })
      .addCase(modalOpened, (state) => {
        state.isActive && (state.isActive = false);
      });
  },
});

// Actions
export const { burgerActivated, burgerDeactivated } = burgerSlice.actions;

// Selectors
export const selectBurgerIsActive = (state) => state.burger.isActive;

// Thunks
export const burgerClicked = () => (dispatch, getState) => {
  const {
    navigationItems: { isOpen: isNavigationItemsOpen },
    burger: { isActive: isBurgerActive },
  } = getState();
  isNavigationItemsOpen
    ? dispatch(navigationItemsClosed())
    : dispatch(navigationItemsOpened());
  isBurgerActive ? dispatch(burgerDeactivated()) : dispatch(burgerActivated());
};

// Reducer
export default burgerSlice.reducer;

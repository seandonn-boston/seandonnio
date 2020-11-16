import { createSlice } from "@reduxjs/toolkit";

import {
  navigationItemsClosed,
  navigationItemsOpened,
} from "../../../app/Navigation/NavigationItems/navigationItemsSlice";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isActive: false,
  },
  reducers: {
    burgerActivated(state) {
      !state.isActive && (state.isActive = true);
    },
    burgerDeactivated(state) {
      state.isActive && (state.isActive = false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(navigationItemsClosed, (state) => {
      state.isActive && (state.isActive = false);
    });
  },
});

export const { burgerActivated, burgerDeactivated } = burgerSlice.actions;

export const selectBurgerIsActive = (state) => state.burger.isActive;

// Synchronous thunk `burgerClicked` is necessary to avoid circular dependency errors
export const burgerClicked = () => (dispatch, getState) => {
  const {
    navigationItems: { isOpen: isNavigationItemsOpen },
    burger: { isActive: isBurgerActive },
  } = getState();
  isBurgerActive ? dispatch(burgerDeactivated()) : dispatch(burgerActivated());
  isNavigationItemsOpen
    ? dispatch(navigationItemsClosed())
    : dispatch(navigationItemsOpened());
};

export default burgerSlice.reducer;

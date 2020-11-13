// Import
import { createSlice } from "@reduxjs/toolkit";

import { modalOpened } from "../../Modal/modalSlice";

// Slice
export const navigationItemsSlice = createSlice({
  name: "navigationItems",
  initialState: {
    isOpen: false,
  },
  reducers: {
    navigationItemsOpened(state) {
      !state.isOpen && (state.isOpen = true);
    },
    navigationItemsClosed(state) {
      state.isOpen && (state.isOpen = false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(modalOpened, (state) => {
      state.isOpen && (state.isOpen = false);
    });
  },
});

// Actions
export const {
  navigationItemsOpened,
  navigationItemsClosed,
} = navigationItemsSlice.actions;

// Selectors
export const selectNavigationItemsIsOpen = (state) =>
  state.navigationItems.isOpen;

// Reducer
export default navigationItemsSlice.reducer;

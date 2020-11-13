import { createSlice } from "@reduxjs/toolkit";

import { modalOpened } from "../../Modal/modalSlice";

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

export const {
  navigationItemsOpened,
  navigationItemsClosed,
} = navigationItemsSlice.actions;

export const selectNavigationItemsIsOpen = (state) =>
  state.navigationItems.isOpen;

export default navigationItemsSlice.reducer;

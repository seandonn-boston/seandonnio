import { createSlice } from "@reduxjs/toolkit";

import { burgerToggled } from "../../../global/ui/Burger/burgerSlice";

export const navigationItemsSlice = createSlice({
  name: "navigationItems",
  initialState: {
    isOpen: false,
  },
  reducers: {
    navigationItemsOpened(state) {
      state.isOpen = true;
    },
    navigationItemsClosed(state) {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(burgerToggled, (state) => {
      state.isOpen = !state.isOpen;
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

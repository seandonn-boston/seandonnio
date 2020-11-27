import { createSlice } from "@reduxjs/toolkit";

export const navigationItemsSlice = createSlice({
  name: "navigationItems",
  initialState: {
    isOpen: false,
  },
  reducers: {
    navigationItemsToggled(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { navigationItemsToggled } = navigationItemsSlice.actions;

export const selectNavigationItemsIsOpen = (state) =>
  state.navigationItems.isOpen;

export default navigationItemsSlice.reducer;

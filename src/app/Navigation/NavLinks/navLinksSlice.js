// navLinksSlice.js
// the Redux logic for the navLinks feature

import { createSlice } from "@reduxjs/toolkit";

export const navLinksSlice = createSlice({
  name: "navLinks",
  initialState: {
    isOpen: false,
  },
  reducers: {
    navLinksOpener: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { navLinksOpener } = navLinksSlice.actions;

export const selectIsOpen = (state) => state.navLinks.isOpen;

export default navLinksSlice.reducer;

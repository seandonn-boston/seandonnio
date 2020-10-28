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

export const selectNavLinksIsOpen = (state) => state.navLinks.isOpen;

export default navLinksSlice.reducer;

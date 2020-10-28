import { createSlice } from "@reduxjs/toolkit";

export const veilSlice = createSlice({
  name: "veil",
  initialState: {
    isOpen: false,
  },
  reducers: {
    veilOpener(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { veilOpener } = veilSlice.actions;

export const selectVeilIsOpen = (state) => state.veil.isOpen;

export default veilSlice.reducer;

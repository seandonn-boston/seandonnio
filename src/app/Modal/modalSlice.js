import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    modalOpener(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { modalOpener } = modalSlice.actions;

export const selectIsOpen = (state) => state.modal.isOpen;

export default modalSlice.reducer;

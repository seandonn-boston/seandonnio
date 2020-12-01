import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: { type: "", file: null },
  },
  reducers: {
    modalStateUpdated(state, { payload }) {
      if (payload) {
        state.isOpen = true;
        state.content = payload;
      } else {
        state.isOpen = false;
        state.content = { type: "", file: null };
      }
    },
  },
});

export const { modalStateUpdated } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.isOpen;
export const selectModalContent = (state) => state.modal.content;

export default modalSlice.reducer;

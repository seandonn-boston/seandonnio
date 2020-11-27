import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: { type: "", file: null },
  },
  reducers: {
    modalToggled(state, { payload }) {
      state.isOpen = payload ? true : false;
      state.content = payload ? payload : { type: "", file: null };
    },
  },
});

export const { modalToggled } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.isOpen;
export const selectModalContent = (state) => state.modal.content;

export default modalSlice.reducer;

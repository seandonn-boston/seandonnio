// Import
import { createSlice } from "@reduxjs/toolkit";

// Slice
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: { type: "", file: null },
  },
  reducers: {
    modalOpened(state, action) {
      !state.isOpen && (state.isOpen = true);
      state.content = action.payload;
    },
    modalClosed(state) {
      state.isOpen && (state.isOpen = false);
      state.content = { type: "", file: null };
    },
  },
});

// Actions
export const { modalOpened, modalClosed } = modalSlice.actions;

// Selectors
export const selectModalIsOpen = (state) => state.modal.isOpen;
export const selectModalContent = (state) => state.modal.content;

// Reducer
export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: {
      type: "",
      file: null,
    },
  },
  reducers: {
    modalOpener(state) {
      state.isOpen = !state.isOpen;
    },
    setModalContentType(state, action) {
      state.content.type = action.payload;
    },
    setModalContentFile(state, action) {
      state.content.file = action.payload;
    },
  },
});

export const {
  modalOpener,
  setModalContentType,
  setModalContentFile,
} = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.isOpen;
export const selectModalContentType = (state) => state.modal.content.type;
export const selectModalContentFile = (state) => state.modal.content.file;

export default modalSlice.reducer;

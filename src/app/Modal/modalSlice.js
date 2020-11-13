import { createSlice } from "@reduxjs/toolkit";

import { veilClosed } from "../Veil/veilSlice";

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
  extraReducers: (builder) =>
    builder.addCase(veilClosed, (state) => {
      if (state.isOpen) {
        state.isOpen = false;
        state.content = { type: "", file: null };
      }
    }),
});

export const { modalOpened, modalClosed } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.isOpen;
export const selectModalContent = (state) => state.modal.content;

export default modalSlice.reducer;

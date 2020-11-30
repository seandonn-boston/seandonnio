import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: { type: "", file: null },
  },
  reducers: {
    // TODO: This currently works for the pdf closing on the isTablet change, but the concern is now on the images which are allowed to stay open in a modal on tablet/mobile. This makes me think one of two things needs to happen: the logic needs to update in the modalStateUpdated, or the Modal cannot rely on Redux anymore. But I'm not yet sold on the latter. Only one modal open at a time, right?
    modalStateUpdated(state, { payload }) {
      if (payload.type) {
        state.isOpen = true;
        state.content = payload;
      } else if (
        payload === "close" ||
        (state.content.type === "pdf" && payload === "conditionalClose")
      ) {
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

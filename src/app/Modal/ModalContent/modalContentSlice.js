import { createSlice } from "@reduxjs/toolkit";

export const modalContentSlice = createSlice({
  name: "modalContent",
  initialState: {
    content: "",
  },
  reducers: {
    setModalContent(state, action) {
      state.content = action.payload;
    },
  },
});

export const { setModalContent } = modalContentSlice.actions;

export const selectModalContent = (state) => state.modalContent.content;

export default modalContentSlice.reducer;

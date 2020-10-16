// clientSlice.js
// the Redux logic for client data

import { createSlice } from "@reduxjs/toolkit";

import { bpM } from "../styles/config/_breakpoints.scss";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    isMobile: window.innerWidth < bpM,
  },
  reducers: {
    setIsMobile: (state) => {
      state.isMobile = window.innerWidth < bpM;
    },
  },
});

export const { setIsMobile } = clientSlice.actions;

export const selectIsMobile = (state) => state.client.isMobile;

export default clientSlice.reducer;

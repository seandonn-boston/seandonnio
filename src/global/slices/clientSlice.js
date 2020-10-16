// clientSlice.js
// the Redux logic for client data

import { createSlice } from "@reduxjs/toolkit";

// TODO Still need a file of breakpoint constants
const BREAKPOINT_SMALL = 768;

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    isMobile: window.innerWidth < BREAKPOINT_SMALL,
  },
  reducers: {
    setIsMobile: (state) => {
      state.isMobile = window.innerWidth < BREAKPOINT_SMALL;
    },
  },
});

export const { setIsMobile } = clientSlice.actions;

export const selectIsMobile = (state) => state.client.isMobile;

export default clientSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { bpM } from "../styles/config/_breakpoints.scss";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    isClient: typeof window === "object",
    isMobile: typeof window === "object" && window.innerWidth < bpM,
  },
  reducers: {
    setIsMobile: (state) => {
      state.isClient && (state.isMobile = window.innerWidth < bpM);
    },
  },
});

export const { setIsMobile } = clientSlice.actions;

export const selectIsClient = (state) => state.client.isClient;
export const selectIsMobile = (state) => state.client.isMobile;

export default clientSlice.reducer;

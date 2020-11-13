import { createSlice } from "@reduxjs/toolkit";

import {
  burgerToggled,
  burgerActivated,
  burgerDeactivated,
} from "../../global/ui/Burger/burgerSlice";

// Slice
export const veilSlice = createSlice({
  name: "veil",
  initialState: {
    status: false,
  },
  reducers: {
    veilOpened(state) {
      !state.isOpen && (state.isOpen = true);
    },
    veilClosed(state) {
      state.isOpen && (state.isOpen = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(burgerActivated, (state) => {
        state.isOpen = true;
      })
      .addCase(burgerToggled, (state) => {
        state.isOpen = !state.isOpen;
      });
  },
});

// Selectors
export const selectVeilIsOpen = (state) => state.veil.isOpen;

// Thunks
export const veilClicked = () => (dispatch, getState) => {
  const {
    burger: { isActive: burgerIsActive },
  } = getState();
  // Necessary to avoid circular dependency between veilSlice and burgerSlice
  dispatch(veilClosed());
  burgerIsActive && dispatch(burgerDeactivated());
};

// Actions
export const { veilOpened, veilClosed } = veilSlice.actions;

// Reducer
export default veilSlice.reducer;

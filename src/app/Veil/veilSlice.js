import { createSlice } from "@reduxjs/toolkit";

import { navigationItemsToggled } from "../Navigation/NavigationItems/navigationItemsSlice";
import { modalStateUpdated } from "../Modal/modalSlice";

export const veilSlice = createSlice({
  name: "veil",
  initialState: {
    isOpen: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(navigationItemsToggled, (state) => {
        state.isOpen = !state.isOpen;
      })
      .addCase(modalStateUpdated, (state, { payload }) => {
        if (payload.type) {
          state.isOpen = true;
        } else if (payload === "close" || "conditionalClose") {
          state.isOpen = false;
        }
      });
  },
});

export const selectVeilIsOpen = (state) => state.veil.isOpen;

export const handleVeilClicked = () => (dispatch, getState) => {
  const {
    navigationItems: { isOpen: isNavigationItemsOpen },
  } = getState();
  dispatch(modalStateUpdated("close"));
  isNavigationItemsOpen && dispatch(navigationItemsToggled());
};

export default veilSlice.reducer;

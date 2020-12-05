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
        if (payload) {
          state.isOpen = !state.isOpen;
        } else {
          state.isOpen = false;
        }
      });
  },
});

export const selectVeilIsOpen = (state) => state.veil.isOpen;

export const handleVeilClicked = () => (dispatch, getState) => {
  const {
    modal: { isOpen: isModalOpen },
    navigationItems: { isOpen: isNavigationItemsOpen },
  } = getState();
  isModalOpen && dispatch(modalStateUpdated());
  isNavigationItemsOpen && dispatch(navigationItemsToggled());
};

export default veilSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { navigationItemsToggled } from "../Navigation/NavigationItems/navigationItemsSlice";
import { modalToggled } from "../Modal/modalSlice";

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
      .addCase(modalToggled, (state) => {
        state.isOpen = !state.isOpen;
      });
  },
});

export const selectVeilIsOpen = (state) => state.veil.isOpen;

export const handleVeilClicked = () => (dispatch, getState) => {
  const {
    modal: { isOpen: isModalOpen },
    navigationItems: { isOpen: isNavigationItemsOpen },
  } = getState();
  isModalOpen && dispatch(modalToggled());
  isNavigationItemsOpen && dispatch(navigationItemsToggled());
};

export default veilSlice.reducer;

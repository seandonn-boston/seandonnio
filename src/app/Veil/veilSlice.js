import { createSlice } from "@reduxjs/toolkit";

import { navigationItemsClosed } from "../Navigation/NavigationItems/navigationItemsSlice";
import {
  burgerToggled,
  burgerActivated,
  burgerDeactivated,
} from "../../global/ui/Burger/burgerSlice";
import { modalClosed } from "../Modal/modalSlice";

export const veilClicked = () => (dispatch, getState) => {
  const {
    navigationItems: { isOpen: navigationItemsIsOpen },
    burger: { isActive: burgerIsActive },
    modal: { isOpen: modalIsOpen },
  } = getState();

  dispatch(veilClosed());
  navigationItemsIsOpen && dispatch(navigationItemsClosed());
  burgerIsActive && dispatch(burgerDeactivated());
  modalIsOpen && dispatch(modalClosed());
};

export const veilSlice = createSlice({
  name: "veil",
  initialState: {
    isOpen: false,
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

export const { veilOpened, veilClosed } = veilSlice.actions;

export const selectVeilIsOpen = (state) => state.veil.isOpen;

export default veilSlice.reducer;

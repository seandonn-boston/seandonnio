// Import
import { createSlice } from "@reduxjs/toolkit";

import {
  burgerActivated,
  burgerDeactivated,
} from "../../global/ui/Burger/burgerSlice";
import { navigationItemsClosed } from "../Navigation/NavigationItems/navigationItemsSlice";
import { modalOpened, modalClosed } from "../Modal/modalSlice";

// Slice
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
        state.isOpen = !state.isOpen;
      })
      .addCase(navigationItemsClosed, (state) => {
        state.isOpen && (state.isOpen = false);
      })
      .addCase(modalOpened, (state) => {
        !state.isOpen && (state.isOpen = true);
      })
      .addCase(modalClosed, (state) => {
        state.isOpen && (state.isOpen = false);
      });
  },
});

// Actions
export const { veilOpened, veilClosed } = veilSlice.actions;

// Selectors
export const selectVeilIsOpen = (state) => state.veil.isOpen;

// Thunks
export const veilClicked = () => (dispatch, getState) => {
  const {
    modal: { isOpen: isModalOpen },
    navigationItems: { isOpen: isNavigationItemsOpen },
    burger: { isActive: burgerIsActive },
  } = getState();
  dispatch(veilClosed());
  isModalOpen && dispatch(modalClosed());
  isNavigationItemsOpen && dispatch(navigationItemsClosed());
  burgerIsActive && dispatch(burgerDeactivated());
};

// Reducer
export default veilSlice.reducer;

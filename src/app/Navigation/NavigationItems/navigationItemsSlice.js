import { createSlice } from "@reduxjs/toolkit";

import { burgerToggled } from "../../../global/ui/Burger/burgerSlice";
import { veilClosed } from "../../Veil/veilSlice";

export const navigationItemsSlice = createSlice({
  name: "navigationItems",
  initialState: {
    isOpen: false,
  },
  reducers: {
    navigationItemsOpened(state) {
      state.isOpen = true;
    },
    navigationItemsClosed(state) {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(burgerToggled, (state) => {
        state.isOpen = !state.isOpen;
      })
      .addCase(veilClosed, (state) => {
        if (state.isOpen) {
          state.isOpen = false;
        }
      });
  },
});

export const {
  navigationItemsOpened,
  navigationItemsClosed,
} = navigationItemsSlice.actions;

export const selectNavigationItemsIsOpen = (state) =>
  state.navigationItems.isOpen;

export default navigationItemsSlice.reducer;

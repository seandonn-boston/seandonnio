import { createSlice } from "@reduxjs/toolkit";

import { navigationItemsToggled } from "../../../app/Navigation/NavigationItems/navigationItemsSlice";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isActive: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(navigationItemsToggled, (state) => {
      state.isActive = !state.isActive;
    });
  },
});

export const selectBurgerIsActive = (state) => state.burger.isActive;

export default burgerSlice.reducer;

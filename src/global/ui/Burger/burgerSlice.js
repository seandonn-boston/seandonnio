import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isActive: false,
  },
  reducers: {
    burgerToggled(state) {
      state.isActive = !state.isActive;
    },
    burgerActivated(state) {
      state.isActive = true;
    },
    burgerDeactivated(state) {
      state.isActive = false;
    },
  },
});

export const {
  burgerToggled,
  burgerActivated,
  burgerDeactivated,
} = burgerSlice.actions;

export const selectBurgerIsActive = (state) => state.burger.isActive;

export default burgerSlice.reducer;

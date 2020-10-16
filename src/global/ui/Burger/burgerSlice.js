import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isActive: false,
  },
  reducers: {
    setBurgerIsActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { setBurgerIsActive } = burgerSlice.actions;

export const selectIsActive = (state) => state.burger.isActive;

export default burgerSlice.reducer;

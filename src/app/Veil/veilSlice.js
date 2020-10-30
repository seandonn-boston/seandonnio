import { createSlice } from "@reduxjs/toolkit";

import { navLinksOpener } from "../Navigation/NavLinks/navLinksSlice";
import { setBurgerIsActive } from "../../global/ui/Burger/burgerSlice";
import {
  modalOpener,
  setModalContentFile,
  setModalContentType,
} from "../Modal/modalSlice";

export function handleVeilOnClick() {
  return (dispatch, getState) => {
    const {
      veil: { isOpen: veilIsOpen },
      navLinks: { isOpen: navLinksIsOpen },
      burger: { isActive: burgerIsActive },
      modal: {
        isOpen: modalIsOpen,
        content: { type: modalContentType, file: modalContentFile },
      },
    } = getState();
    veilIsOpen && dispatch(veilOpener());
    navLinksIsOpen && dispatch(navLinksOpener());
    burgerIsActive && dispatch(setBurgerIsActive());
    if (modalIsOpen) {
      dispatch(modalOpener());
      modalContentType && dispatch(setModalContentType(""));
      modalContentFile && dispatch(setModalContentFile(null));
    }
  };
}

export const veilSlice = createSlice({
  name: "veil",
  initialState: {
    isOpen: false,
  },
  reducers: {
    veilOpener(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { veilOpener } = veilSlice.actions;

export const selectVeilIsOpen = (state) => state.veil.isOpen;

export default veilSlice.reducer;

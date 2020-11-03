import { veilClosed } from "../../../app/Veil/veilSlice";
import { modalClosed } from "../../../app/Modal/modalSlice";

export const xClicked = () => (dispatch, getState) => {
  const {
    veil: { isOpen: isVeilOpen },
  } = getState();

  isVeilOpen && dispatch(veilClosed());
  dispatch(modalClosed());
};

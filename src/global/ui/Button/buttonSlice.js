import { veilOpened } from "../../../app/Veil/veilSlice";
import { burgerDeactivated } from "../Burger/burgerSlice";
import { modalOpened } from "../../../app/Modal/modalSlice";
import { navigationItemsClosed } from "../../../app/Navigation/NavigationItems/navigationItemsSlice";

import ResumePdf from "../../assets/pdf/sean_donnellan_resume.pdf";

export const buttonClicked = (e, buttonClickActionType) => (
  dispatch,
  getState
) => {
  let payload;
  switch (buttonClickActionType) {
    case "openResumeModal":
      e.preventDefault();
      payload = { type: "pdf", file: ResumePdf };
      const {
        navigationItems: { isOpen: navigationItemsIsOpen },
        veil: { isOpen: veilIsOpen },
        burger: { isActive: burgerIsActive },
      } = getState();
      dispatch(modalOpened(payload));
      navigationItemsIsOpen && dispatch(navigationItemsClosed());
      !veilIsOpen && dispatch(veilOpened());
      burgerIsActive && dispatch(burgerDeactivated());
      break;
    default:
      e.preventDefault();
      break;
  }
};

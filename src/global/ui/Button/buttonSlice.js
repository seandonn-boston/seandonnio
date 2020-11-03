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
      // TODO: abstract constants, reference elsewhere
      // TODO: I still don't like the pdf file bein inserted into the logic here. It's overly reliant on the button and the modal... perhaps a pdf slice with a extra reducer builder listening for... well, for what? idk, thats the problem...
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

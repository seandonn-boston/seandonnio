import { veilClosed } from "../../../Veil/veilSlice";
import { burgerDeactivated } from "../../../../global/ui/Burger/burgerSlice";
import { navigationItemsClosed } from "../navigationItemsSlice";

export const navigationItemClicked = () => (dispatch, getState) => {
  const {
    navigationItems: { isOpen: isNavigationItemsOpen },
    veil: { isOpen: isVeilOpen },
    burger: { isActive: isBurgerActive },
  } = getState();

  isNavigationItemsOpen && dispatch(navigationItemsClosed());
  isVeilOpen && dispatch(veilClosed());
  isBurgerActive && dispatch(burgerDeactivated());
};

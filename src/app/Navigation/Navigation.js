import React from "react";
import PropTypes from "prop-types";
// React-Router
// import { Link } from "react-router-dom";
// Custom Components
import Burger from "../../global/ui/Burger/Burger";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Button from "../../global/ui/Button/Button";
// Assets
import ResumePdf from "../../global/assets/pdf/sean_donnellan_resume.pdf";
// Styles
import {
  navigation,
  navigationInnerWrapper,
  navigationItemRightAlign,
} from "./Navigation.scss";

const Navigation = ({ isMobile, isMobileNavOpen, setIsMobileNavOpen }) => (
  <section className={navigation}>
      {isMobile ? (
        <>
          <div className={navigationInnerWrapper}>
            <Burger
              handleIsOpen={setIsMobileNavOpen}
              isOpen={isMobileNavOpen}
            />
            <Logo />
          </div>
          <Nav isOpen={isMobileNavOpen} />
        </>
      ) : (
        <div className={navigationInnerWrapper}>
          <Logo />
          <Nav />
          <span className={navigationItemRightAlign}>
            <Button content="Resume" link={ResumePdf} target="_blank" />
          </span>
        </div>
      )}
  </section>
);

export default Navigation;

Navigation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

// export const Navbar = () => {
//   return (
//     <nav>
//       <section>
//         <h1>Redux Essentials Example</h1>

//         <div className="navContent">
//           <div className="navLinks">
//             <Link to="/">Posts</Link>
//             <Link to="/users">Users</Link>
//             <Link to="/notifications">
//               Notifications {unreadNotificationsBadge}
//             </Link>
//           </div>
//           <button className="button" onClick={fetchNewNotifications}>
//             Refresh Notifications
//           </button>
//         </div>
//       </section>
//     </nav>
//   );
// };

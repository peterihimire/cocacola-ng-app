import React from "react";
import "./MobileNav.css";

const MobileNav = (props) => {
  console.log(props);
  return (
    <>
      <div
        className={
          props.openState
            ? "mobile-nav-overlay transparent-bcg"
            : "mobile-nav-overlay"
        }
        onClick={props.closeMenu}
      />
      <div className={props.openState ? "mobile-nav show-nav" : "mobile-nav"}>
        <ul className="mobile-nav-links">
          <li className="mobile-nav-item">
            <a className="navbar-single-link" href="/">
              Task 1
            </a>
          </li>
          <li className="mobile-nav-item">
            <a className="navbar-single-link" href="/">
              Task 2
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;

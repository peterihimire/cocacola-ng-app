import React from "react";
import menuImg from "../assets/menu-icon.svg";
import addBtn from "../assets/add-btn.svg";

const Navbar = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="nav-container">
            <div className="navbar-btn" onClick={props.openMenu}>
              <img src={menuImg} alt="menu-icon" /> <span>Profile</span>
            </div>

            <ul className="navbar-links">
              <li className="navbar-item">
                <a className="navbar-single-link" href="/">
                  task 1
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-single-link" href="/">
                  task 2
                </a>
              </li>
            </ul>
            <div className="navbar-header">
              <img src={addBtn} alt="add button icon" />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import ColaPage from './components/ColaPage';


const App = () => {
  // For Menu Handler
  const [menuState, setMenuState] = useState({
    isOpen: false,
  });

  const openHandler = () => {
    setMenuState({
      isOpen: !menuState.isOpen,
    });
  };
  const closeHandler = () => {
    setMenuState({
      isOpen: false,
    });
  };

  return (
    <div>
      <>
        <Navbar openMenu={openHandler} />
        <MobileNav closeMenu={closeHandler} openState={menuState.isOpen} />
        <ColaPage />
      </>
    </div>
  );
};

export default App;

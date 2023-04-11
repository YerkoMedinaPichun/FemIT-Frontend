import React from "react";
import { Logo } from "../index";
import "./navbar.css";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = ({ bgcolor, children }) => {
  let isLargerThan375 = useMediaQuery("(min-width:375px)");

  if (window.innerWidth >= 375) {
    isLargerThan375 = true;
  }

  return (
    <nav
      className={`${isLargerThan375 ? "sm" : "xs"} navbar-landing ${bgcolor}`}
    >
      {children}
    </nav>
  );
};

export default Navbar;

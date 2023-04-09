import React from "react";
import { Logo } from "../index";
import "./navbar.css";
const Navbar = ({ bgcolor, children }) => {
  return <nav className={`navbar-landing ${bgcolor}`}>{children}</nav>;
};

export default Navbar;

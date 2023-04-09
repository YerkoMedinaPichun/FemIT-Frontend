import React from "react";
import "./button.css";

const Button = ({ color, bgcolor, size, children }) => {
  return (
    <button className={`button ${color} ${bgcolor} ${size}`}>{children}</button>
  );
};

export default Button;

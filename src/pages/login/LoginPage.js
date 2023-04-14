import React from "react";
import { Footer, FormLogin, NavbarLanding } from "../../components";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <NavbarLanding />
      <FormLogin />
      <Footer />
    </div>
  )
};

export default LoginPage;

import React from "react";
import "./logo.css";
import { ReactComponent as LogoFemit } from "../logo/assets/Logo-FemIT-02.svg";

const Logo = () => {
	return (
		<div className="contenedor-logo">
			{/* <LogoFemit className="logo" /> */}
			<h1 className="logo">FemIT</h1>
		</div>
	);
};

export default Logo;

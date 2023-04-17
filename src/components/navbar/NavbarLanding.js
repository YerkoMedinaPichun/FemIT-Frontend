import React from "react";
import Navbar from "./Navbar";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const NavbarLanding = () => {
	return (
		<Navbar bgcolor="bg-color-primary">
			{/* <Logo color="color-gris-06" /> */}
			<Link link to="/">
				<Logo />
			</Link>
			<Link to="/LoginPage">
				<Button color="color-gris-06" bgcolor="bg-color-secondary">
					Iniciar Sesión
				</Button>
			</Link>
		</Navbar>
	);
};

export default NavbarLanding;

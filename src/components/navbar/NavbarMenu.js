import React from "react";
import Navbar from "./Navbar";
import Logo from "../logo/Logo";
import Sections from "../sections/Sections";
import "./navbarMenu.css";

const NavbarMenu = () => {
	return (
		<header>
			<Navbar bgcolor="bg-color-primary">
				<div className="contenedor-logo-buscador">
					<Logo color="color-gris-06" />
					<input className="buscador" type="search" placeholder="Buscar..." />
				</div>

				<Sections></Sections>
			</Navbar>
		</header>
	);
};

export default NavbarMenu;

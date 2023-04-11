import React from "react";
import "./sections.css";
import Section from "../section/Section";
import { Link } from "react-router-dom";

const Sections = () => {
	function handleClick(e) {
		const sections = document.querySelectorAll("a");
		sections.forEach((section) => {
			if (section.classList.contains("section-navbar--actual")) {
				section.classList.remove("section-navbar--actual");
			}
		});

		e.target.classList.add("section-navbar--actual");
	}

	return (
		<div className="container-sections">
			<Link className="section-navbar" onClick={handleClick} to="/HomePage">
				<Section id="inicio" icono={<ion-icon name="home-sharp"></ion-icon>}>
					Inicio
				</Section>
			</Link>

			<Link
				className="section-navbar"
				onClick={handleClick}
				to="/MentorshipPage"
			>
				<Section
					id="mentoria"
					icono={<ion-icon name="document-sharp"></ion-icon>}
				>
					Mentoría
				</Section>
			</Link>

			<Link className="section-navbar" onClick={handleClick} to="/JobsPage">
				<Section
					id="empleos"
					icono={<ion-icon name="briefcase-sharp"></ion-icon>}
				>
					Empleos
				</Section>
			</Link>

			<Link
				className="section-navbar"
				onClick={handleClick}
				to="/EducationPage"
			>
				<Section id="educacion" icono={<ion-icon name="book-sharp"></ion-icon>}>
					Educación
				</Section>
			</Link>

			<Link className="section-navbar" onClick={handleClick} to="/ContactsPage">
				<Section
					id="contactos"
					icono={<ion-icon name="people-sharp"></ion-icon>}
				>
					Contactos
				</Section>
			</Link>

			<Link
				className="section-navbar"
				onClick={handleClick}
				to="/InspirationPage"
			>
				<Section
					id="inspiracion"
					icono={<ion-icon name="trophy-sharp"></ion-icon>}
				>
					Inspiración
				</Section>
			</Link>

			<Link className="section-navbar" onClick={handleClick} to="/ProfilePage">
				<Section
					id="profile"
					icono={<ion-icon name="person-circle-sharp"></ion-icon>}
				></Section>
			</Link>
		</div>
	);
};

export default Sections;

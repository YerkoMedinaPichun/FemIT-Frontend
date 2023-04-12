import React from "react";
import "./section.css";

// comentario

const Section = ({ icono, children }) => {
	return (
		<>
			<div className="contenedor-icono">{icono}</div>
			<p className="titulo">{children}</p>
			<span className="barra"></span>
		</>
	);
};

export default Section;

import React from "react";
import InfoCard from "../infoCard/InfoCard";

const Card = ({ title, fecha, descripcion }) => {
	return (
		<>
			<article>
				<header>
					<InfoCard tile={title} />
					<InfoCard fecha={fecha} />
				</header>
				<main>
					<img src={""} alt="imagen proyecto" />
					<p>{descripcion}</p>
				</main>
			</article>
		</>
	);
};

export default Card;

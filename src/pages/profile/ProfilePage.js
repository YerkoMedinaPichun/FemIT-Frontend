import React from "react";
import { Navbar, Button, InfoPerfil, Portfolio } from "../../components";
import { imagenPefil } from "./assets/imgs/perfil-usuaria.svg";

const ProfilePage = ({
	nombre,
	edad,
	rol,
	isTrabajando,
	estudios,
	enlace,
	pagina,
}) => {
	return (
		<>
			<div>
				<header>
					<Navbar />
				</header>
				<hero>
					<section>
						<img src="" alt="" />
					</section>
					<section>
						<img src={imagenPefil} alt="imagen perfil usuaria" />
					</section>
				</hero>
				<main>
					<section>
						<InfoPerfil nombre={nombre} /> {/*Nombre*/}
						<Button />
						<hr />
					</section>
					<section>
						<div>
							<InfoPerfil edad={edad} /> {/*Edad*/}
							<InfoPerfil rol={rol} /> {/*Rol*/}
							<InfoPerfil isTrabajando={isTrabajando} />{" "}
							{/*Booleano trabajando*/}
							<Button />
						</div>
						<div>
							<InfoPerfil estudios={estudios} /> {/*Estudios*/}
						</div>
						<hr />
					</section>
					<section>
						<h4>Enlaces</h4>
						{pagina.map((pagina, index) => (
							<InfoPerfil key={index} pagina={pagina} enlace={enlace} />
						))}
						<hr />
					</section>
					<section>
						<h4>Portafolio</h4>
						<Portfolio />
					</section>
				</main>
			</div>
		</>
	);
};

export default ProfilePage;

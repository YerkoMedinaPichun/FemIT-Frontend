import React from "react";
import { NavbarMenu, Button, InfoPerfil, Portfolio } from "../../components";
import imagenPerfil from "./assets/imgs/profile-image.png";

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
				<nav>
					<NavbarMenu />
				</nav>
				<hero>
					<section>
						<img src="" alt="" />
					</section>
					<section>
						<img src={imagenPerfil} alt="imagen perfil usuaria" />
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

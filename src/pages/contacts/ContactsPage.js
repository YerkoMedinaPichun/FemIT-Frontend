import React from "react";
import NavbarMenu from "../../components/navbar/NavbarMenu";
import "./contactsPage.css";

const ContactsPage = () => {
	return (
		<>
			<NavbarMenu />
			<div className="contenedor-contactos">
				<div className="informacion">
					<p className="cantidad-contactos">3 contactos</p>
					<select className="combobox">
						<option value="">Agregados recientemente</option>
					</select>
					<input className="buscador" type="search" placeholder="Buscar..." />
				</div>
				<div className="contactos-pendientes">
					<div className="contacto">
						<div className="foto-contacto">
							<div className="foto"></div>
						</div>
						<div className="informacion-contacto">
							<p className="nombre-contacto">Antonia Hernández Rojas</p>
							<p className="cargo-contacto">Scrum Master</p>
							<p className="tiempo">Hace 2 horas</p>
						</div>
						<div className="acciones-contacto">
							<button className="button-accept">
								<ion-icon name="checkmark-circle-outline"></ion-icon>
							</button>
							<button className="button-reject">
								<ion-icon name="close-circle-outline"></ion-icon>
							</button>
						</div>
					</div>
				</div>
				<div className="contactos">
					<div className="contacto">
						<div className="foto-contacto">
							<div className="foto"></div>
						</div>
						<div className="informacion-contacto">
							<p className="nombre-contacto">Renata Álvarez Cruz</p>
							<p className="cargo-contacto">Reclutadora</p>
							<p className="tiempo">Agregada hace 2 días</p>
						</div>
					</div>
					<div className="contacto">
						<div className="foto-contacto">
							<div className="foto"></div>
						</div>
						<div className="informacion-contacto">
							<p className="nombre-contacto">Catalina Ortiz Ramírez</p>
							<p className="cargo-contacto">Reclutadora</p>
							<p className="tiempo">Agregada hace 1 semana</p>
						</div>
					</div>
					<div className="contacto">
						<div className="foto-contacto">
							<div className="foto"></div>
						</div>
						<div className="informacion-contacto">
							<p className="nombre-contacto">Francisca Vargas Moya</p>
							<p className="cargo-contacto">
								Desarrolladora Full Stack Java Senior
							</p>
							<p className="tiempo">Agregada hace 1 semana</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactsPage;

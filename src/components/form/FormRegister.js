import React, { useState } from "react";
import Button from "../button/Button";
import "./formRegister.css";

const FormRegister = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [lastName1, setLastName1] = useState("");
	const [lastName2, setLastName2] = useState("");
	const [birthday, setbirthday] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirPassword, setConfirPassword] = useState("");

	return (
		<div class="form_body">
			<form>
				<h1>¡Únete a FemIT!</h1>
				<div class="name">
					<label for="inputNombre" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Nombre"
						id="Nombre"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div class="lastName">
					<label for="inputApellido" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Primer apellido"
						id="Apellido"
						value={lastName1}
						onChange={(e) => setLastName1(e.target.value)}
					/>
				</div>
				<div class="lastName2">
					<label for="inputApellido2" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Segundo apellido"
						id="Apellido2"
						value={lastName2}
						onChange={(e) => setLastName2(e.target.value)}
					/>
				</div>
				<div class="input">
					<label for="inputFechaNacimiento" class="form-label"></label>
					<input
						type="date"
						class="date form-control"
						id="FechaNacimiento"
						value={birthday}
						onChange={(e) => setbirthday(e.target.value)}
					/>
				</div>
				<div class="input">
					<label for="inputCorreo" class="form-label"></label>
					<input
						type="email"
						class="form-control"
						placeholder="Correo Electrónico"
						id="correo"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div class="input">
					<label for="inputContraseña" class="form-label"></label>
					<input
						type="password"
						class="form-control"
						placeholder="Contraseña"
						id="ingresoContraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div class="input">
					<label for="inputContraseñaConfirmacion" class="form-label"></label>
					<input
						type="password"
						class="form-control"
						placeholder="Confirmar contraseña"
						id="ingresoContraseñaConfirmacion"
						value={confirPassword}
						onChange={(e) => setConfirPassword(e.target.value)}
					/>
				</div>

				<div class="btnAceptar">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">
						Acepto los terminos y condiciones.
					</label>
				</div>

				<Button
					class="register"
					color="color-gris-06"
					bgcolor="bg-color-secondary"
					size="bid">
					Crear cuenta
				</Button>
				<hr></hr>
				<Button
					class="registerGoogel"
					color="color-gris-06"
					bgcolor="bg-color-secondary"
					size="big">
					Registrate con Google
				</Button>
			</form>
		</div>
	);
};

export default FormRegister;

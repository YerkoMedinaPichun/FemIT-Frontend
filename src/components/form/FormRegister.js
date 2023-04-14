import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import "./formRegister.css";

const usuarioInit = {
	id_usuario: 0,
	nombre: "",
	apellidos: "",
	fecha_nacimiento: "",
	correo_electronico: "",
	contrasena: "",
	foto_portada: "",
	foto_perfil: "",
	cargo: "",
	estudios: "",
	buscando_empleo: 0,
	curriculum: "",
	links: "",
	rol_usuario: "",
};

const FormRegister = ({
	agregarUsuario,
	usuarioEditado,
	setUsuarioEditado,
	editarUsuario,
	onSubmit,
}) => {
	const [name, setName] = useState("");
	const [lastName1, setLastName1] = useState("");
	const [lastName2, setLastName2] = useState("");
	const [birthday, setbirthday] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirPassword, setConfirPassword] = useState("");

	const [usuario, setUsuario] = useState(usuarioInit);

	const {
		id_usuario,
		nombre,
		apellidos,
		fecha_nacimiento,
		correo_electronico,
		contrasena,
	} = usuario;

	const handleInputChange = (e) => {
		const handleFormValue = {
			...usuario,
			[e.target.name]: e.target.value,
		};
		setUsuario(handleFormValue);
	};

	useEffect(() => {
		if (usuarioEditado !== null) {
			setUsuario(usuarioEditado);
		} else {
			setUsuario({
				id_usuario: 0,
				nombre: "",
				apellidos: "",
				fecha_nacimiento: "",
				correo_electronico: "",
				contrasena: "",
				foto_portada: "",
				foto_perfil: "",
				cargo: "",
				estudios: "",
				buscando_empleo: 0,
				curriculum: "",
				links: "",
				rol_usuario: "",
			});
		}
	}, [usuarioEditado]);

	return (
		<div class="form_body">
			<div className="form-register">
				<h1 class="title-form">¡Únete a FemIT!</h1>
				{usuarioEditado !== null ? (
					<div>
						<label for="exampleFormControlInput1" class="form-label">
							ID Usuario
						</label>
						<input
							type="text"
							class="form-control"
							placeholder="ID"
							id="id_usuario"
							name="id_usuario"
							value={id_usuario}
							onChange={handleInputChange}
							disabled
						/>
					</div>
				) : (
					<></>
				)}

				<div class="name">
					<label for="inputNombre" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Nombre"
						id="nombre"
						name="nombre"
						value={nombre}
						onChange={handleInputChange}
						// onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div class="lastName">
					<label for="inputApellido" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Apellidos"
						id="apellidos"
						name="apellidos"
						value={apellidos}
						onChange={handleInputChange}
						// onChange={(e) => setLastName1(e.target.value)}
					/>
				</div>
				{/* <div class="lastName">
					<label for="inputApellido" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Primer apellido"
						id="Apellido"
						value={lastName1}
						onChange={(e) => setLastName1(e.target.value)}
					/>
				</div> */}
				{/* <div class="lastName2">
					<label for="inputApellido2" class="form-label"></label>
					<input
						type="text"
						class="form-control"
						placeholder="Segundo apellido"
						id="Apellido2"
						value={lastName2}
						onChange={(e) => setLastName2(e.target.value)}
					/>
				</div> */}
				<div class="input">
					<label for="inputFechaNacimiento" class="form-label"></label>
					<input
						type="date"
						class="date form-control"
						id="fecha_nacimiento"
						name="fecha_nacimiento"
						value={fecha_nacimiento}
						onChange={handleInputChange}
						// onChange={(e) => setbirthday(e.target.value)}
					/>
				</div>
				<div class="input">
					<label for="inputCorreo" class="form-label"></label>
					<input
						type="email"
						class="form-control"
						placeholder="Correo Electrónico"
						id="correo_electronico"
						name="correo_electronico"
						value={correo_electronico}
						onChange={handleInputChange}
						// onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div class="input">
					<label for="inputContraseña" class="form-label"></label>
					<input
						type="password"
						class="form-control"
						placeholder="Contraseña"
						id="contrasena"
						name="contrasena"
						value={contrasena}
						onChange={handleInputChange}
						// onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{/* <div class="input">
					<label for="inputContraseñaConfirmacion" class="form-label"></label>
					<input
						type="password"
						class="form-control"
						placeholder="Confirmar contraseña"
						id="ingresoContraseñaConfirmacion"
						value={confirPassword}
						onChange={(e) => setConfirPassword(e.target.value)}
					/>
				</div> */}

				<div class="btnAceptar">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">
						Acepto los terminos y condiciones.
					</label>
				</div>

				{/* <button
					className="button-register"
					onClick={() => agregarUsuario(usuario)}
				>
					Crear cuenta
				</button> */}

				{usuarioEditado !== null ? (
					<div>
						<button
							type="button"
							class="btn btn-success"
							onClick={() => editarUsuario(usuario)}
						>
							Editar
						</button>
						<button
							type="button"
							class="btn btn-danger"
							onClick={() => setUsuarioEditado(null)}
						>
							Cancelar
						</button>
					</div>
				) : (
					<Button
						class="register"
						color="color-gris-06"
						bgcolor="bg-color-secondary"
						size="bid"
						onClick={() => agregarUsuario(usuario)}
					>
						Crear cuenta
					</Button>
				)}

				{/* <hr></hr>
				<Button
					class="registerGoogel"
					color="color-gris-06"
					bgcolor="bg-color-secondary"
					size="big"
				>
					Registrate con Google
				</Button> */}
			</div>
		</div>
	);
};

export default FormRegister;

import React from "react";
import "./formRegister.css";
import "./formLogin.css";
import Button from "../button/Button";

const FormLogin = () => {
	return (
		<div class="form_body">
			<div class="form-register">
				<h2 class="title-form">Iniciar sesión</h2>
				<div>
					<input class="form-control" placeholder="Correo electrónico" />
				</div>
				<div>
					<input
						class="form-control"
						placeholder="Contraseña"
						type="password"
					/>
				</div>
				<div>
					<a href="*">
						<p class="olvidaste-contrasena">¿Has olvidado tu contraseña?</p>
					</a>
				</div>
				<div>
					<Button
						class="register"
						color="color-gris-06"
						bgcolor="bg-color-secondary"
						size="bid">
						Iniciar sesión
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FormLogin;

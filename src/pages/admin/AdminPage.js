import React, { useEffect, useState } from "react";
import { Footer, FormRegister, NavbarLanding } from "../../components";
import {
	getAll,
	usuarioAdd,
	usuarioEdit,
	usuarioDelete,
} from "../../services/UsuarioService";

const AdminPage = () => {
	const [usuario, setUsuario] = useState([]);
	const [usuarioEditado, setUsuarioEditado] = useState(null);

	const obtenerUsuarios = async () => {
		setUsuario(await getAll());
	};

	const agregarUsuario = async (usuario) => {
		await usuarioAdd(usuario);
		obtenerUsuarios();
	};

	useEffect(() => {
		obtenerUsuarios();
	}, []);

	return (
		<>
			<NavbarLanding />
			<FormRegister agregarUsuario={agregarUsuario} />

			{/* {usuario.map((u) => (
				<p>{u.nombre}</p>
			))} */}
			<table>
				<thead>
					<th>Id</th>
					<th>Nombre</th>
					<th>Apellidos</th>
					<th>Fecha de nacimiento</th>
				</thead>
				<tbody>
					{usuario.map((u) => (
						<tr>
							<td>{u.id_usuario}</td>
							<td>{u.nombre}</td>
							<td>{u.apellidos}</td>
							<td>{u.fecha_nacimiento}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Footer />
		</>
	);
};

export default AdminPage;

import React, { useEffect, useState } from "react";
import { Footer, FormRegister, NavbarLanding, Table } from "../../components";
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

	const editarUsuario = async (usuario) => {
		await usuarioEdit(usuario);
		obtenerUsuarios();
		setUsuarioEditado(null);
	};

	const eliminarUsuario = async (id) => {
		await usuarioDelete(id);
		obtenerUsuarios();
	};

	useEffect(() => {
		obtenerUsuarios();
	}, []);

	return (
		<>
			<NavbarLanding />
			<FormRegister
				agregarUsuario={agregarUsuario}
				usuarioEditado={usuarioEditado}
				setUsuarioEditado={setUsuarioEditado}
				editarUsuario={editarUsuario}
			/>
			<Table
				usuario={usuario}
				setUsuarioEditado={setUsuarioEditado}
				eliminarUsuario={eliminarUsuario}
			/>

			<Footer />
		</>
	);
};

export default AdminPage;

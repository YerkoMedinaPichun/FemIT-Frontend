import React from "react";

const Table = ({ usuario, setUsuarioEditado, eliminarUsuario }) => {
	return (
		<table>
			<thead>
				<th>Id</th>
				<th>Nombre</th>
				<th>Apellidos</th>
				<th>Fecha de nacimiento</th>
				<th>Correo electrónico</th>

				<th>Opciones</th>
			</thead>
			<tbody>
				{usuario.map((u) => (
					<tr>
						<td>{u.id_usuario}</td>
						<td>{u.nombre}</td>
						<td>{u.apellidos}</td>
						<td>{u.fecha_nacimiento}</td>
						<td>{u.correo_electronico}</td>

						<td>
							<button onClick={() => setUsuarioEditado(u)}>Editar</button>
							<button onClick={() => eliminarUsuario(u.id_usuario)}>
								Eliminar
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;

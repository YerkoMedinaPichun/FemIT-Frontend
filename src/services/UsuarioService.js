import axios from "axios";
const baseURL = "http://127.0.0.1:8080";

const getAll = async () => {
	const rest = await axios.get(baseURL + "/usuaria/findall");

	console.log(rest.data);
	return rest.data;
};

const usuarioAdd = async (usuario) => {
	const rest = await axios.post(baseURL + "/usuaria/save", usuario);
	console.log(rest);
	return rest.data;
};

const usuarioEdit = async (usuario) => {
	const rest = await axios.put(baseURL + "/usuaria/update", usuario);
	console.log(rest);
	return rest.data;
};

const usuarioDelete = async (id) => {
	//const estudiante_id= 46
	//si consideramos que id = 3 -> http://localhost:8080/estudiante/Delete/3
	const rest = await axios.delete(baseURL + "/usuaria/delete/" + id);
	console.log(rest);
	return rest.data;
};

export { getAll, usuarioAdd, usuarioEdit, usuarioDelete };

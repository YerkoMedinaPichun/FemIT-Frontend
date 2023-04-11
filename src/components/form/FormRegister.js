import React, {useState} from 'react'
import Button from '../button/Button'

const FormRegister = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [lastName1, setLastName1] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [birthday, setbirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirPassword, setConfirPassword] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        onSubmit({name,lastName1,lastName2,birthday,email,password,confirPassword});
    }

  
    return (
    <div>
            <form class= "formBody">
                <h2>¡Únete a FemIT!</h2>
                <div class="name">
                    <label for="inputNombre" class="form-label">
                    </label>
                    <input 
                    type="text" 
                    class="form-control"
                    placeholder="Nombre" 
                    id="Nombre" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div class="apellido1">
                    <label for="inputApellido" class="form-label">
                    </label>
                    <input 
                    type="text" 
                    class="form-control"
                    placeholder="Primer apellido" 
                    id="Apellido" 
                    value={lastName1}
                    onChange={(e)=> setLastName1(e.target.value)}
                    />
                </div>
                <div class="apellido2">
                    <label for="inputApellido2" class="form-label">
                    </label>
                    <input 
                    type="text" 
                    class="form-control"
                    placeholder="Segundo apellido"
                    id="Apellido2" 
                    value={lastName2}
                    onChange={(e)=> setLastName2(e.target.value)}
                    />
                </div>
                <div class="fecha">
                    <label for="inputFechaNacimiento" class="form-label">
                    </label>
                    <input 
                    type="date" 
                    class="form-control" 
                    id="FechaNacimiento" 
                    value={birthday}
                    onChange={(e)=> setbirthday(e.target.value)}
                    />
                </div>
                <div class="correo">
                    <label for="inputCorreo" class="form-label">
                    </label>
                    <input 
                    type="email" 
                    class="form-control"
                    placeholder="Correo Electrónico"
                    id="correo" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}            
                    />
                </div>
                <div class="contrasena">
                    <label for="inputContraseña" class="form-label">
                    </label>
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Contraseña"
                    id="ingresoContraseña" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div class="confirContrasena">
                    <label for="inputContraseñaConfirmacion" class="form-label">
                    </label>
                    <input
                    type="password"
                    class="form-control"
                    placeholder="Confirmar contraseña"
                    id="ingresoContraseñaConfirmacion"
                    value={confirPassword}
                    onChange={(e)=> setConfirPassword(e.target.value)}
                    />
                </div>

                <div class="btnAceptar">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">
                    Acepto
                    </label>
                </div>
                <Button
                    accion={"Registrarse"}
                    type="submit"
                    color={"btn btn-outline-dark"}
                >Registrarse</Button>
            </form>
    </div>
  )
}

export default FormRegister
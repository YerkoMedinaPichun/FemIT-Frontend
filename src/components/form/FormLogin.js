import React from 'react';
import './formLogin.css';

const FormLogin = () => {
    return (
        <div className='form-login-container'>
            <h2>Iniciar sesión</h2>
            <input placeholder='Correo electrónico' />
            <input placeholder='Contraseña' type='password' />
            <a href="*"><p>¿Has olvidado tu contraseña?</p></a>
            <button>Iniciar sesión</button>
            <button>Inciar sesión con Google</button>
        </div>
    )
}

export default FormLogin
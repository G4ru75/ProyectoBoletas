import react, {useState, useEffect} from 'react';
import LoginStyle from '../Styles/Login.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errores, setErrores] = useState({});

  useEffect(() => {
    const errores = {};
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errores.email = 'El email no es válido';
    }

    if (contraseña && (contraseña.length < 8 || contraseña.length > 20)) {
        errores.contraseña = 'La contraseña debe tener entre 8 y 20 caracteres';
    }

    setErrores(errores);
  },[email, contraseña]); 


  return (
    <>
    <div className={LoginStyle.container}>
      <div className={LoginStyle.loginBox}>
        <div className={LoginStyle.avatar}>
          <img src="/imagenes/LogoBoletaYa.ico" alt="Logo" className={LoginStyle.loginLogo} />
        </div>
        <h2 className={LoginStyle.title}>BIENVENIDO</h2>

        <div className="form-floating mb-3 ">
          <input type="email" className="form-control h-75 d-inline-block" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
          <label for="floatingInput">Correo</label>
          {errores.email && (<span className ={LoginStyle.error}>{errores.email}</span>)}
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)}/>
          <label for="floatingPassword">Contraseña</label>
          {errores.contraseña && <span className={LoginStyle.error}>{errores.contraseña}</span>}
        </div>
        <br/>
        <button className={LoginStyle.button}>Iniciar sesion</button>
        <div>
          <p className={LoginStyle.texto}>¿No tienes cuenta?</p>
          <Link to="/signup" className={LoginStyle.a}>Registrate</Link>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Login;


import react, {useState, useEffect} from 'react';
import LoginStyle from '../Styles/Login.module.css';
import Navbar from './NavBar';
import Footer from './Footer';

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
    <Navbar/>
    <div className={LoginStyle.container}>
      <div className={LoginStyle.loginBox}>
        <h2 className={LoginStyle.title}>BIENVENIDO</h2>
        <div className={LoginStyle.avatar}>
          <img src="/imagenes/LogoBoletaYa.ico" alt="Logo" className={LoginStyle.loginLogo} />
        </div>
        <input
          type="email"
          placeholder="Email"
          className={LoginStyle.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && (<span className ={LoginStyle.error}>{errores.email}</span>)}
        <input
          type="contraseña"
          placeholder="Contraseña"
          className={LoginStyle.input}
          onChange={(e) => setContraseña(e.target.value)}
        />
        {errores.contraseña && <span className={LoginStyle.error}>{errores.contraseña}</span>}

        <button className={LoginStyle.button}>Iniciar sesion</button>
        <div>
          <p className={LoginStyle.texto}>¿No tienes cuenta?</p>
          <a href="/signup" className={LoginStyle.a}>
            Registrate
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default Login;
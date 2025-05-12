import react from 'react';
import LoginStyle from '../Styles/Login.module.css';
import Navbar from './NavBar';
import Footer from './Footer';

function Login() {
  return (
    <>
    <Navbar/>
    <div className={LoginStyle.container}>
      <div className={LoginStyle.loginBox}>
        <h2 className={LoginStyle.title}>BIENVENIDO</h2>
        <div className={LoginStyle.avatar}></div>
        <input
          type="email"
          placeholder="Email"
          className={LoginStyle.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className={LoginStyle.input}
        />
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
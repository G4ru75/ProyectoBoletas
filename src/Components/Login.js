import react from 'react';
import LoginStyle from '../Styles/Login.module.css';

function Login() {
  return (
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
          <p>¿No tienes cuenta?</p>
          <a href="/signup">
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
import react from 'react';
import SignUpStyle from '../Styles/SignUp.module.css';
import Navbar from './NavBar';
import Footer from './Footer';
function Signup() {
  return (
    <>
    <Navbar/>
      <div className={SignUpStyle.container}>
        <div className={SignUpStyle.formSection}>
          <h2>Registro de usuario</h2>
          <form className={SignUpStyle.form}>
            <label>Nombre</label>
            <input type="text" 
            placeholder='Digite su nombre'
            />

            <label>Apellido</label>
            <input type="text" 
            placeholder='Digite su apellido'
            />

            <label>Número identificación</label>
            <input type="number"
            placeholder='Digite su numero de identificacion sin puntos'
            />

            <label>Teléfono</label>
            <input type="number"
            placeholder='Digite su numero de telefono'
            />

            <label>Email</label>
            <input type="email" 
            placeholder='Digite su email'
            />

            <label>Contraseña</label>
            <input type="password" 
            placeholder='Digite su contraseña'
            />

            <button type="submit">Registrarme</button>
          </form>
        </div>
        <div className={SignUpStyle.textSection}>
          <h2>Obtén tus boletas de forma rápida y segura para los eventos que amas: desde los conciertos más esperados hasta los partidos más intensos y los shows más espectaculares.</h2>        
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;
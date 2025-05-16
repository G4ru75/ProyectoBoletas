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
            maxLength={20}
            minLength={3}
            pattern="[A-Za-z]+"
            title="El nombre solo puede contener letras"
            required
            />

            <label>Apellido</label>
            <input type="text" 
            placeholder='Digite su apellido'
            maxLength={20}
            minLength={3}
            pattern="[A-Za-z]+"
            title="El nombre solo puede contener letras"
            required
            />

            <label>Número identificación</label>
            <input type="number"
            placeholder='Digite su numero de identificacion sin puntos' 
            min={1}
            maxLength={10}
            minLength={7}
            required
            pattern="[0-9]+"
            
            />

            <label>Teléfono</label>
            <input type="number"
            placeholder='Digite su numero de telefono' 
            min={3000000000}
            maxLength={10}
            minLength={10}
            pattern='[0-9]+'
            required
            />

            <label>Email</label>
            <input type="email" 
            placeholder='Digite su email'
            pattern='[^\s@]+@[^\s@]+\.[^\s@]+'
            title="El email debe tener un formato válido"
            required
            />

            <label>Contraseña</label>
            <input type="password" 
            placeholder='Digite su contraseña'
            minLength={6}
            pattern='(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}+'
            title="La contraseña debe tener al menos 6 caracteres y contener letras y números"
            />

            <button type="submit">Registrarme</button>
          </form>
        </div>
        <div className={SignUpStyle.textSection}>
          <h2>Obtén tus boletas de forma rápida y segura para los eventos que amas: 
              desde los conciertos más esperados hasta los partidos más intensos y los shows más espectaculares.</h2>        
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;
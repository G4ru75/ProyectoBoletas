import react, {useState, useEffect} from 'react';
import LoginStyle from '../Styles/Login.module.css';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie'; //Libreria para manejar cookies


function Login() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errores, setErrores] = useState({});

  const navegar = useNavigate();

  useEffect(() => {
    const errores = {};

    if (contraseña && (contraseña.length < 8 || contraseña.length > 20)) {
        errores.contraseña = 'La contraseña debe tener entre 8 y 20 caracteres';
    }


    setErrores(errores);
  },[contraseña]); 

  const handleIniciarSesion = (e) => {
    e.preventDefault();
    if (Object.keys(errores).length === 0) {

      const Usuario = {
        nombreUsuario: nombreUsuario,
        contrasena: contraseña
      }

      fetch('https://localhost:7047/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //"Authorization": "Bearer " + token
        },
        body: JSON.stringify(Usuario)
      })

      .then(async response => {
        const data = await response.json();
        if (!response.ok){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ah ocurrido un error',
          });

        } else {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: `Bienvenido usuario ${data.user.nombre} ${data.user.apellido}`,
          });
          console.log(data.token);
          
          Cookies.set('token', data.token, {
            expires: 1,// La cookie expirará en 1 día
            secure: true, // Solo se enviará a través de HTTPS
            sameSite: 'Strict' // La cookie no se enviará con solicitudes de terceros
          })

          setNombreUsuario('');
          setContraseña('');

          navegar('/'); //Ir a principal si los datos son correctos

        }
      });
  }else {
    console.log('Errores en el formulario:', errores);
  }
  }; 


  return (
    <>
    <div className={LoginStyle.container}>
      <div className={LoginStyle.loginBox}>
        <div className={LoginStyle.avatar}>
          <img src="/imagenes/LogoBoletaYa.ico" alt="Logo" className={LoginStyle.loginLogo} />
        </div>
        <h2 className={LoginStyle.title}>BIENVENIDO</h2>

        <div className="form-floating mb-3 ">
          <input type="text" className="form-control h-75 d-inline-block" id="floatingInput" placeholder="name@example.com" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>
          <label for="floatingInput">Nombre Usuario</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
          <label for="floatingPassword">Contraseña</label>
          {errores.contraseña && <span className={LoginStyle.error}>{errores.contraseña}</span>}
        </div>
        <br/>
        <button className={LoginStyle.button} onClick={handleIniciarSesion}>Iniciar sesion</button>
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


import react from 'react';
import { useState, useEffect } from 'react';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-gray-100 p-6 rounded-xl w-full max-w-md mx-auto shadow-md">
        <h2 className="text-xl font-bold text-center mb-6">BIENVENIDO</h2>
        <div className="border-b-2 border-blue-500 mb-6"></div>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded-md w-full focus:outline-none transform transition-all hover:scale-105">
              Iniciar sesion
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-700">¿No tienes cuenta?</p>
            <a href="/signup" className="text-green-500 hover:underline">
              Registrate
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;


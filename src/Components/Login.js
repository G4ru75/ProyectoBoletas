import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='bg-gray-100 p-6  rounded-xl  w-full max-w-md mx-auto my-8'>
        <h2 className="text-xl font-bold text-center mb-6">BIENVENIDO</h2>
          <div className="border-b-2 border-blue-500 mb-6"></div>
          <form className='space-y-4'>
            <div> 
              <input type="email" placeholder="Email" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/> 
            </div>
            <div>
              <input type="password" placeholder="Contraseña" className="w-full border rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>

            <div className='flex justify-center '>
            <button className="bg-green-500 hover:bg-green-700  text-white font-bold p-2 rounded-md focus:outline-none  transform transition-all hover:scale-105">Iniciar sesion</button>
            </div>  
              <div className='text-center mt-4'>
                <p className='text-gray-700'>¿No tienes cuenta?</p>
                  <a href="/signup" className='text-green-500 hover:underline'>Registrate</a>
              </div>
            </form>
      </div>
    </div>
  );
}

export default Login;


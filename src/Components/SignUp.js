import react from 'react';
import SignUpStyle from '../Styles/SignUp.module.css';
import Navbar from './NavBar';
import Footer from './Footer';

function Signup() {
  return (
    <>
    <Navbar/>
    <div className="flex justify-between items-center px-10 py-8 lg:px-40 gap-10 flex-wrap">
      <div className="font-sans bg-gray-200 rounded-2xl p-12 w-full max-w-md shadow-md">
        <h2 className="text-center mb-4 font-bold text-xl">Registro de usuario</h2>
        <form className="flex flex-col gap-3">
          <label className="font-bold">Nombre</label>
          <input
            type="text"
            placeholder="Digite su nombre"
            maxLength={20}
            minLength={3}
            pattern="[A-Za-z]+"
            title="El nombre solo puede contener letras"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-bold">Apellido</label>
          <input
            type="text"
            placeholder="Digite su apellido"
            maxLength={20}
            minLength={3}
            pattern="[A-Za-z]+"
            title="El apellido solo puede contener letras"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-bold">Número identificación</label>
          <input
            type="number"
            placeholder="Digite su numero de identificacion sin puntos"
            min={1}
            maxLength={10}
            minLength={7}
            required
            pattern="[0-9]+"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-bold">Teléfono</label>
          <input
            type="number"
            placeholder="Digite su numero de telefono"
            min={3000000000}
            maxLength={10}
            minLength={10}
            pattern="[0-9]+"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="Digite su email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            title="El email debe tener un formato válido"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-bold">Contraseña</label>
          <input
            type="password"
            placeholder="Digite su contraseña"
            minLength={6}
            pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}+"
            title="La contraseña debe tener al menos 6 caracteres y contener letras y números"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="mt-4 p-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105"
          >
            Registrarme
          </button>
        </form>
      </div>

      <div className="flex-1 flex items-center justify-center text-center font-sans">
        <h2 className="text-2xl">
          Obtén tus boletas de forma rápida y segura para los eventos que amas: desde los conciertos más esperados hasta
          los partidos más intensos y los shows más espectaculares.
        </h2>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup
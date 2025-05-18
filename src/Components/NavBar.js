import react, {useState} from 'react';
import NavbarStyle from '../Styles/NavBar.module.css';

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <div className="bg-sky-500 p-4 "> 
    
            <nav className="px-2 py-2 sm:flex sm:items-center sm:justify-between">
                <section className="flex justify-betwen">
                    <h1 className="text-gray-700 font-bold ">BOLETAS YA</h1>
                </section>
                <div className="flex flex-col items-start mt-3 gap-2 sm:flex-row smm-0">
                    <button className="text-gray-700 hover:bg-gray-200 px-2 py-2 rounded">Inicio</button>
                    <button className="text-gray-700 hover:bg-gray-200 px-2 py-2 rounded">Información</button>
                    <button className="text-gray-700 hover:bg-gray-200 px-2 py-2 rounded">Contacto</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105">Iniciar sesion</button>
                </div>
            </nav>
    
        </div>   
        );
    }
    export default NavBar;
import react, {useState} from 'react';


function NavBar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <div className="bg-sky-500 p-4 "> 
    
            <nav className="px-2 py-2 sm:flex sm:items-center sm:justify-between">
                <section className="flex justify-betwen">
                    <h1 className="flex justify-center font-sans text-3xl text-white font-bold">BOLETAS YA</h1>
                </section>
                <div className="flex flex-col items-start mt-3 gap-2 sm:flex-row smm-0">
                    <button className="text-2xl text-gray-700 hover:bg-gray-200 px-2 py-2 rounded cursor-pointer">Inicio</button>
                    <button className="text-2xl text-gray-700 hover:bg-gray-200 px-2 py-2 rounded cursor-pointer">Información</button>
                    <button className="text-2xl text-gray-700 hover:bg-gray-200 px-2 py-2 rounded cursor-pointer">Contacto</button>
                    <button className="text-2xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105">Iniciar sesion</button>
                </div>
            </nav>
    
        </div>   
        );
    }
    export default NavBar;
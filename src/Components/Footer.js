import react from 'react';
import FooterStyle from '../Styles/Footer.module.css';

function Footer(){
    return(
    <footer className="bg-sky-500 text-white flex justify-between p-8 flex-wrap text-center">
        <div className="flex-1 min-w-[200px] my-2">
            <p className="flex justify-center font-sans text-5xl text-white font-bold">Boletas ya</p>
        </div>
        <div className="dlex-1 min-w-[200px] my-2">
            <p className="font-sans font-bold text-xl mb-2">Canales de ayuda</p>
            <p><strong>Tel:</strong>+37 333 3333 333</p>
            <p><strong>Email:</strong> proyectoBoletas@gmail.com</p>
        </div>
        <div className="flex-1 min-w-[200px] my-2">
            <a className="font.sans text-lg text-white my-1 block py-2 hover:underline cursor-pointer">Inicio</a>
            <a className="font.sans text-lg text-white my-1 block py-2 hover:underline cursor-pointer">Iniciar sesión</a>
            <a className="font.sans text-lg text-white my-1 block py-2 hover:underline cursor-pointer">Registrarse</a>
        </div>
    </footer>
    );
}

export default Footer;


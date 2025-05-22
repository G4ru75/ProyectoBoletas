import react from 'react';
import FooterStyle from '../Styles/Footer.module.css';

function Footer(){
    return(
    <footer className={FooterStyle.footer}>
        <div className={FooterStyle.column}>
            <p className={FooterStyle.NombreP}>Boletas ya</p>
        </div>
        <div className={FooterStyle.column}>
            <p className={FooterStyle.title}>Canales de ayuda</p>
            <p><strong>Tel:</strong>+37 333 3333 333</p>
            <p><strong>Email:</strong> proyectoBoletas@gmail.com</p>
        </div>
        <div className={FooterStyle.column}>
            <a className={FooterStyle.link}>Inicio</a>
            <a className={FooterStyle.link}>Iniciar sesión</a>
            <a className={FooterStyle.link}>Registrarse</a>
        </div>
    </footer>
    );
}

export default Footer;


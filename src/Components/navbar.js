import react, {useState} from 'react';
import NavbarStyle from '../Styles/NavBar.module.css';

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header className={NavbarStyle.navbar}>
        <div className={NavbarStyle.logo}>
            <img src="/imagenes/LogoBoletaYa.ico" alt="Logo" className={NavbarStyle.logoImg} />
        </div>
        <h1 className={NavbarStyle.title}>Boletas ya</h1>
        <div className={NavbarStyle.hamburger} onClick={toggleMenu}>
        <span />
        <span />
        <span />
        </div>

        <nav className={`${NavbarStyle.menu} ${menuAbierto ? NavbarStyle.show : ""}`}>
        <a href="#">Inicio</a>
        <a href="#">Información</a>
        <a href="#">Contacto</a>
        <a href="#">Iniciar Sesión</a>
        </nav>
    </header>
    );
    }

export default Navbar;
import react, {useState} from 'react';
import NavbarStyle from '../Styles/NavBar.module.css';
import {Link, useNavigate} from 'react-router-dom';

function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const navigate = useNavigate();

    const IrAInicio = () => {
        navigate('/');
    }
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header className={NavbarStyle.navbar}>
        <div className={NavbarStyle.logo}>
            <img src="/imagenes/LogoBoletaYa.ico" alt="Logo" className={NavbarStyle.logoImg} />
        </div>
        <h1 className={NavbarStyle.title} onClick={IrAInicio}>Boletas ya</h1>
        <div className={NavbarStyle.hamburger} onClick={toggleMenu}>
            <span/>
            <span/>
            <span/>
        </div>

        <nav className={`${NavbarStyle.menu} ${menuAbierto ? NavbarStyle.show : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/informacion">Informacion</Link>
        <Link to="/informacion">Contacto</Link>
        <Link to="/login">Iniciar Sesion</Link>
        </nav>
    </header>
    );
    }

export default Navbar;
import NavBar from './navbar';
import Footer from './Footer';
import BarraBusqueda from './BarraBusqueda';
import ListaEventos from './ListaEventos';
import Cookies from 'js-cookie';
function PaginaPrincipal() {
        
    const user = JSON.parse(Cookies.get('user'));
    console.log("Usuario actual:", user);
    
    return (
        
        <>
            <NavBar />
            <BarraBusqueda />
            <h1>   Eventos disponibles</h1>
            <ListaEventos />
            <Footer />
        </>
    );
}

export default PaginaPrincipal;


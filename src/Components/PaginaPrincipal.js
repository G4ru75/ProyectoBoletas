import NavBar from './navbar';
import Footer from './Footer';
import BarraBusqueda from './BarraBusqueda';
import ListaEventos from './ListaEventos';

function PaginaPrincipal() {
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


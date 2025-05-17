import react from 'react';
import CartaEvento from '../Components/CartaEvento.js';
import ListaEventosStyle from '../Styles/ListaEventos.module.css';

function ListaEventos() {
    return(
        <div className={ListaEventosStyle.container}>
            <CartaEvento/>
            <CartaEvento/>
            <CartaEvento/>  
            <CartaEvento/>
            <CartaEvento/>
            <CartaEvento/>
            <CartaEvento/>
        </div>
    ); 
}

export default ListaEventos;
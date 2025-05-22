import React, { useEffect, useState } from 'react';
import CartaEvento from '../Components/CartaEvento';
import ListaEventosStyle from '../Styles/ListaEventos.module.css';

function ListaEventos() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7047/api/Eventos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los eventos');
                }
                return response.json();
            })
            .then(data => setEventos(data))
            .catch(error => console.error("Error al obtener eventos:", error));
    }, []);

    return (
        <div className={ListaEventosStyle.container}>
            {eventos.map(evento => (
                <CartaEvento key={evento.id_Evento} evento={evento} />
            ))}
        </div>
    );
}

export default ListaEventos;

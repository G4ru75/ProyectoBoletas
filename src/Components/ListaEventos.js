import React, { useEffect, useState } from 'react';
import CartaEvento from '../Components/CartaEvento';
import ListaEventosStyle from '../Styles/ListaEventos.module.css';
import { Cookie } from 'lucide-react';

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
            .then(data => {
                const EventosActivos = data.filter(evento => evento.estado == true)
                setEventos(EventosActivos);
                console.log("Eventos obtenidos:", EventosActivos);
            })
            .catch(error => console.error("Error al obtener eventos:", error));
    }, []);

    return (
        <div className={ListaEventosStyle.container}>
            {eventos.map(evento => (
                <CartaEvento key={evento.id_Evento} evento={evento} />
            ))
        }
            {
            eventos.length === 0 ? (
                <h5 className={ListaEventosStyle.mensaje}>No hay eventos disponibles.</h5>
            ) : null}
            
        </div>
    );
}

export default ListaEventos;

import React, { useEffect, useState } from 'react';
import ListaEventosAdminStyle from '../Styles/ListaEventosAdmin.module.css';
import Cookies from 'js-cookie';

function ListaEventosAdmin({ onClose, modoSeleccion = false, onSeleccionarEvento }) {
    const [eventos, setEventos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const token = Cookies.get('token');

        fetch("https://localhost:7047/api/Eventos", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Error al obtener eventos");
            }
            return res.json();
        })
        .then(data => {
            setEventos(data);
            setCargando(false);
        })
        .catch(error => {
            console.error("Error al obtener eventos:", error);
            setCargando(false);
        });
    }, []);

    return (
        <div className={ListaEventosAdminStyle.contenedor}>
            <h2 className={ListaEventosAdminStyle.titulo}>Lista de Eventos</h2>

            {cargando ? (
                <p className={ListaEventosAdminStyle.mensaje}>Cargando eventos...</p>
            ) : eventos.length === 0 ? (
                <p className={ListaEventosAdminStyle.mensaje}>No hay eventos disponibles.</p>
            ) : (
                <div className={ListaEventosAdminStyle.tablaContenedor}>
                    <table className={ListaEventosAdminStyle.tabla}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Lugar</th>
                                <th>Dirección</th>
                                <th>Fecha</th>
                                <th>Precio</th>
                                <th>Tickets</th>
                                <th>Estado</th>
                                <th>Categoría</th>
                                <th>Foto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.map(evento => (
                                <tr key={evento.id_Evento}>
                                    <td>{evento.nombre_Evento}</td>
                                    <td>{evento.descripcion}</td>
                                    <td>{evento.nombre_Lugar}</td>
                                    <td>{evento.direccion_Lugar}</td>
                                    <td>{new Date(evento.fecha).toLocaleString()}</td>
                                    <td>${evento.precioTicket}</td>
                                    <td>{evento.tickets_Disponible}</td>
                                    <td>{evento.estado ? "Activo" : "Inactivo"}</td>
                                    <td>{evento.categoria}</td>
                                    <td>
                                        <img src={`data:image/jpeg;base64,${evento.imagen}`} alt="Imagen evento" 
                                        className={ListaEventosAdminStyle.imagenEvento}/>
                                    </td>

                                    {modoSeleccion && (
                                        <td>
                                            <button className={ListaEventosAdminStyle.botonSeleccionar} onClick={() => onSeleccionarEvento(evento)}>
                                                Seleccionar Evento
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <button className={ListaEventosAdminStyle.botonCerrar} onClick={onClose}>Cerrar</button>
        </div>
    );
}

export default ListaEventosAdmin;

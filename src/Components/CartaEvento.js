import React from 'react';
import cartaEventoStyle from '../Styles/CartaEvento.module.css';
import { Calendar, Clock, MapPin, Timer } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function CartaEvento({ evento }) {
    const navigate = useNavigate();

    if (!evento) return null;

    const IrAEvento = () => {
        navigate(`/evento`, {state: { evento } });
        window.scrollTo(0, 0); // Desplazar hacia arriba al cargar la página del evento
    };

    const fechaFormateada = new Date(evento.fecha).toLocaleDateString();
    const horaFormateada = new Date(evento.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={cartaEventoStyle.tarjeta} style={{ margin: "0 auto" }}>
            <div className={cartaEventoStyle.contenedorImagen}>
                <img src={`data:image/jpeg;base64,${evento.imagen}`} alt="Imagen evento" className={cartaEventoStyle.imagen}/>
            </div>

            <div className={cartaEventoStyle.contenido}>
                <h3 className={cartaEventoStyle.titulo}>{evento.nombre_Evento}</h3>

                <div className={cartaEventoStyle.rejillaInfo}>
                    <div className={cartaEventoStyle.elementoInfo}>
                        <Clock className={cartaEventoStyle.icono} size={16} />
                        <div>
                            <span className={cartaEventoStyle.etiqueta}>Hora</span>
                            <p className={cartaEventoStyle.texto}>{horaFormateada}</p>
                        </div>
                    </div>

                    <div className={cartaEventoStyle.elementoInfo}>
                        <Calendar className={cartaEventoStyle.icono} size={16} />
                        <div>
                            <span className={cartaEventoStyle.etiqueta}>Fecha</span>
                            <p className={cartaEventoStyle.texto}>{fechaFormateada}</p>
                        </div>
                    </div>

                    <div className={cartaEventoStyle.elementoInfo}>
                        <MapPin className={cartaEventoStyle.icono} size={16} />
                        <div>
                            <span className={cartaEventoStyle.etiqueta}>Lugar</span>
                            <p className={cartaEventoStyle.texto}>{evento.nombre_Lugar}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className={cartaEventoStyle.boton} onClick={IrAEvento}>Comprar</button>
        </div>
    );
}

export default CartaEvento;

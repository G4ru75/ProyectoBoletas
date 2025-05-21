import react from 'react'; 
import cartaEventoStyle from '../Styles/CartaEvento.module.css';
import {Calendar, Clock, MapPin, Timer} from "lucide-react";
import { useNavigate } from 'react-router-dom';


function CartaEvento(){

    const navigate = useNavigate();
    const IrAEvento = () => {
        navigate("/evento");
    }
    return(
        <>
        <div className={cartaEventoStyle.tarjeta} style={{margin: "0 auto"}}>
            <div className={cartaEventoStyle.contenedorImagen}>
                <img src="/imagenes/Captura de pantalla 2024-12-01 193725.png" alt="Evento" className={cartaEventoStyle.imagen}/>
            </div>

        <div className={cartaEventoStyle.contenido}>
            <h3 className={cartaEventoStyle.titulo}>Evento</h3>

            <div className={cartaEventoStyle.rejillaInfo}>
                <div className={cartaEventoStyle.elementoInfo}>
                    <Clock className={cartaEventoStyle.icono} size={16}/>
                    <div>
                        <span className={cartaEventoStyle.etiqueta}>Hora</span>
                        <p className={cartaEventoStyle.texto}>2222</p>
                    </div>
                </div>
            

                <div className={cartaEventoStyle.elementoInfo}>
                    <Calendar className={cartaEventoStyle.icono} size={16}/>
                    <div>
                        <span className={cartaEventoStyle.etiqueta}>Fecha</span>
                        <p className={cartaEventoStyle.texto}>2222</p>
                    </div>
                </div>

                <div className={cartaEventoStyle.elementoInfo}>
                    <Timer className={cartaEventoStyle.icono} size={16}/>
                    <div>
                        <span className={cartaEventoStyle.etiqueta}>Duracion</span>
                        <p className={cartaEventoStyle.texto}>2222</p>
                    </div>
                </div>

                <div className={cartaEventoStyle.elementoInfo}>
                    <MapPin className={cartaEventoStyle.icono} size={16}/>
                    <div>
                        <span className={cartaEventoStyle.etiqueta}>Lugar</span>
                        <p className={cartaEventoStyle.texto}>2222</p>
                    </div>
                </div>
            </div>
        </div>

            <button className={cartaEventoStyle.boton} onClick={IrAEvento}>Comprar</button>
        </div>
    </>
    ); 
}

export default CartaEvento;
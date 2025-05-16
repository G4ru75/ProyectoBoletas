import react from 'react'; 
import cartaEventoStyle from '../Styles/CartaEvento.module.css';

function cartaEvento(){
    return(
        <>
        <div className={cartaEventoStyle.card}>
            <div className={cartaEventoStyle.imageArea}>
                <img src="/imagenes/Captura de pantalla 2024-12-01 193725.png" alt="Evento" className={cartaEventoStyle.image}/>
            </div>
        <h3 className={cartaEventoStyle.title}>Evento</h3>

        <div className={cartaEventoStyle.infoRow}>
            <div className={cartaEventoStyle.infoBlock}>
                <span className={cartaEventoStyle.labelWhite}>HORA</span>
                <p className={cartaEventoStyle.text}>2222</p>
            </div>
            <div className={cartaEventoStyle.infoBlock}>
                    <span className={cartaEventoStyle.label}>FECHA</span>
                    <span className={cartaEventoStyle.text}>aaaa</span>
                    <span className={cartaEventoStyle.label}>DURACIÓN</span>
                    <span className={cartaEventoStyle.text}>aaa</span>
            </div>
        </div>

        <div className={cartaEventoStyle.locationRow}>
            <span className={cartaEventoStyle.label}>LUGAR</span>
            <p className={cartaEventoStyle.text}>erere</p>
        </div>
        <button className={cartaEventoStyle.button}>Comprar</button>
        </div>
    </>
    ); 
}

export default cartaEvento;
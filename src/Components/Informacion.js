import React from 'react';
import InformacionStyles from '../Styles/Informacion.module.css';

function Informacion() {
return (
    <>
        
        <main className={InformacionStyles.infoMain}>
        <section className={InformacionStyles.infoSection}>
            <h1 className={InformacionStyles.infoTitle}>Información General</h1>

            <p className={InformacionStyles.infoText}>
            En <strong>Proyecto Boletas</strong> te ofrecemos una experiencia ágil, segura y sin complicaciones para adquirir tus entradas a los mejores eventos. Ya sea que busques asistir a conciertos, obras de teatro, festivales, conferencias, foros o seminarios, aquí encontrarás las boletas más populares y demandadas del momento.
            </p>

            <p className={InformacionStyles.infoText}>
            🛒 <strong>Compra rápida y sin filas:</strong> Realiza tu compra desde la comodidad de tu casa, sin esperas ni trámites innecesarios.
            </p>

            <p className={InformacionStyles.infoText}>
            💳 <strong>Seguridad de compra:</strong>Tus datos están protegidos con altos estándares de seguridad.
            </p>

            <p className={InformacionStyles.infoText}>
            🔎 <strong>Búsqueda personalizada:</strong> Filtra eventos por ciudad, fecha o categoría y encuentra fácilmente lo que estás buscando.
            </p>

            <p className={InformacionStyles.infoText}>
            📲 <strong>Soporte al cliente:</strong> Nuestro equipo está disponible para ayudarte con cualquier duda o inconveniente antes, durante o después de tu compra.
            </p>

            <div className={InformacionStyles.infoContact}>
            <h2 className={InformacionStyles.infoContactTitle}>Contáctanos</h2>
            <p><strong>📞 Teléfono:</strong> +37 333 3333 333</p>
            <p><strong>📧 Correo electrónico:</strong> proyectoBoletas@gmail.com</p>
            </div>

            <p className={InformacionStyles.infoText}>
            ¡Tu próximo evento inolvidable está a solo unos clics de distancia!
            </p>
        </section>
        </main>
    </>
);
}

export default Informacion;
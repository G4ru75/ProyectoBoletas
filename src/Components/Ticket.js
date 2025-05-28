import React from 'react';
import styles from '../Styles/Ticket.module.css';

function Ticket({ isOpen, onClose, ticket }) {
    if (!isOpen || !ticket) return null;

    // Si el QR viene como base64 string:
    const qrSrc = ticket.codigoQR
        ? `data:image/png;base64,${ticket.codigoQR}`
        : null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>&times;</button>
                <h2 className={styles.title}>Ticket Boletas YA</h2>
                <div className={styles.detail}>
                    <span className={styles.label}>Evento:</span> {ticket.nombre_Evento}
                </div>
                <div className={styles.detail}>
                    <span className={styles.label}>Categoría:</span> {ticket.categoria}
                </div>
                <div className={styles.detail}>
                    <span className={styles.label}>Fecha:</span> {new Date(ticket.fecha_Entrada).toLocaleString()}
                </div>
                <div className={styles.detail}>
                    <span className={styles.label}>Código:</span> {ticket.codigoAlfanumerico}
                </div>
                {qrSrc && (
                    <div className={styles.qrContainer}>
                        <img src={qrSrc} alt="QR" width={150} height={150} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Ticket;
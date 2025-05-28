import React, { useEffect, useState } from 'react';
import modalStyles from '../Styles/TicketsListModal.module.css';
import Cookies from 'js-cookie';
import Ticket from './Ticket';

function TicketsListModal({ onClose }) {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTicket, setSelectedTicket] = useState(null);

useEffect(() => {
    const fetchTickets = async () => {
    setLoading(true);
    try {
        const token = Cookies.get('token');
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        const res = await fetch(`https://localhost:7047/api/Tickets/${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
        const data = await res.json();
        setTickets(data.tickets || []);
        } else {
        setTickets([]);
        }
    } catch {
        setTickets([]);
    }
    setLoading(false);
    };
    fetchTickets();
}, []);

if (selectedTicket) {
    return (
    <Ticket
        isOpen={true}
        onClose={() => setSelectedTicket(null)}
        ticket={selectedTicket}
    />
    );
}

return (
    <div className={modalStyles.overlay}>
    <div className={modalStyles.modal}>
        <button className={modalStyles.closeBtn} onClick={onClose} title="Cerrar">×</button>
        <h2 className={modalStyles.title}>Mis Tickets</h2>
        {loading ? (
        <p>Cargando...</p>
        ) : tickets.length === 0 ? (
        <p>No tienes tickets comprados.</p>
        ) : (
        <div className={modalStyles.ticketsList}>
            {tickets.map((t, idx) => (
            <div
                key={t.codigoAlfanumerico || idx}
                className={modalStyles.ticketItem}
                onClick={() => setSelectedTicket(t)}
            >
                <strong>Evento:</strong> {t.nombre_Evento}<br />
                <strong>Categoría:</strong> {t.categoria}<br />
                <strong>Fecha:</strong> {new Date(t.fecha_Entrada).toLocaleString()}<br />
                <strong>Código:</strong> {t.codigoAlfanumerico}<br />
            </div>
            ))}
        </div>
        )}
    </div>
    </div>
);
}

export default TicketsListModal;
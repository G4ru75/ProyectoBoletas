import React, { useState, useEffect } from 'react';
import styles from '../Styles/TicketsButton.module.css';
import TicketsListModal from './TicketsListModal';
import Cookies from 'js-cookie';

function TicketsButton() {
    const [showModal, setShowModal] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
    setIsLogged(!!Cookies.get('token'));
    }, []);

    if (!isLogged) return null;

    return (
    <>
        <button
        className={styles.ticketsBtn}
        onClick={() => setShowModal(true)}
        title="Ver mis tickets"
        >
        🎟️
        </button>
        {showModal && (
        <TicketsListModal onClose={() => setShowModal(false)} />
    )}
    </>
);
}

export default TicketsButton;
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import ListaCategoriasStyles from "../Styles/ListaCategoria.module.css";

function ListaCategorias({ onClose }) {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const token = Cookies.get('token');
    fetch("https://localhost:7047/api/Categorias", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(async response => {
        const mensaje = await response.text(); // Leer como texto, igual que en Login.js
        if (!response.ok) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: mensaje || 'No se pudieron obtener las categorías',
            });
            setCategorias([]);
        } else {
            let data = [];
            try {
                data = JSON.parse(mensaje); // Parsear a JSON si es exitoso
            } catch (e) {
                data = [];
            }
            setCategorias(data);
        }
        setLoading(false);
    })
    .catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error de conexión con el servidor',
        });
        setLoading(false);
    });
}, []);

return (
    <>
        <h2 className={ListaCategoriasStyles.titulo}>Lista de Categorías</h2>
        {loading ? (
            <p>Cargando...</p>
        ) : categorias.length === 0 ? (
            <p>No hay categorías registradas.</p>
        ) : (
            <ul className={ListaCategoriasStyles.lista}>
                {categorias.map((cat, idx) => (
                    <li key={cat.id || idx} className={ListaCategoriasStyles.item}>
                        <strong>ID:</strong> {cat.id_Categoria}         <strong>Nombrre:</strong> {cat.nombre}
                    </li>
                ))}
            </ul>
        )}
    </>
    );
}

export default ListaCategorias;
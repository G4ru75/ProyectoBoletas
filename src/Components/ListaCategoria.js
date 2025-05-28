
import React, { useEffect, useState } from "react";
import ListaCategoriaStyles from "../Styles/ListaCategoria.module.css";
import Cookies from "js-cookie";

function ListaCategorias({ modoSeleccion, onSeleccionarCategoria, onClose }) {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('token');
        fetch("https://localhost:7047/api/Categorias", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setCategorias(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <div className={ListaCategoriaStyles.modal}>
            <div className={ListaCategoriaStyles.contenido}>
                <button className={ListaCategoriaStyles.cerrar} onClick={onClose} aria-label="Cerrar modal">&times;</button>
                <h2 className={ListaCategoriaStyles.titulo}>Lista de Categorías</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : categorias.length === 0 ? (
                    <p>No hay categorías registradas.</p>
                ) : (
                    <ul className={ListaCategoriaStyles.lista}>
                        {categorias.map((cat) => (
                            <li key={cat.id_Categoria} className={ListaCategoriaStyles.item}>
                                <span><strong>ID:</strong> {cat.id_Categoria} <strong>Nombre:</strong> {cat.nombre}</span>
                                {modoSeleccion && (
                                    <button
                                        className={ListaCategoriaStyles.botonSeleccionar}
                                        onClick={() => onSeleccionarCategoria(cat)}
                                    >
                                        Seleccionar
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                <button className={ListaCategoriaStyles.botonCerrar} onClick={onClose}>Cerrar</button>
            </div>
        </div>
        </>
    );
}

export default ListaCategorias;

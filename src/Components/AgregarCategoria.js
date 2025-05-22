import React, { useState } from "react";
import Cookies from "js-cookie"; 
import AgregarCategoriaStyle from "../Styles/AgregarCategoria.module.css";
import Swal from "sweetalert2";
function AgregarCategoria({ onAgregar }) {
    
    const [nombre, setNombre] = useState("");
    const [id_Categoria, SetId_Categoria] = useState("");

    const handleSubmit = (e) => {
        const token = Cookies.get('token'); 

        fetch("https://localhost:7047/api/Categorias", {
            method: "POST",
            headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
            },

            body: JSON.stringify({id_Categoria, nombre})
        }).then((response) => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Categoría agregada correctamente',
                });
                onAgregar();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo agregar la categoría',
                });
            }
        }); 
    }

    return (
        <div className={AgregarCategoriaStyle.centrar}>

            <form className={AgregarCategoriaStyle.formulario} onSubmit={handleSubmit}>
            <h2 className={AgregarCategoriaStyle.titulo}>Agregar Categoría de Evento</h2>

            
            <div className={AgregarCategoriaStyle.grupo}>
                <label htmlFor="nombre" className={AgregarCategoriaStyle.etiqueta}>ID </label>
                <input
                id="ID"
                type="number"
                className={AgregarCategoriaStyle.entrada}
                value={id_Categoria}
                onChange={(e) => SetId_Categoria(e.target.value)}
                required
                pattern="[0-9]+"
                title="El ID solo puede contener números"
                minLength={1}
                maxLength={10}
                min={1}
                />
            </div>

            <div className={AgregarCategoriaStyle.grupo}>
                <label htmlFor="nombre" className={AgregarCategoriaStyle.etiqueta}>Nombre </label>
                <input
                id="nombre"
                type="text"
                className={AgregarCategoriaStyle.entrada}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                pattern="[A-Za-z]+"
                title="El nombre solo puede contener letras"
                minLength={3}
                maxLength={20}
                />
            </div>

            <button type="submit" className={AgregarCategoriaStyle.boton}>Agregar Categoría</button>
            </form>
        </div>
    );
}

export default AgregarCategoria;

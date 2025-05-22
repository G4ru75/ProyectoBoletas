import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import EditarCategoriaStyle from "../Styles/EditarCategoria.module.css"; // Cambia el import

function EditarCategoria({ categoria, onClose, onActualizada }) {
    const [nombre, setNombre] = useState(categoria.nombre);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = Cookies.get('token');
        fetch(`https://localhost:7047/api/Categorias/${categoria.id_Categoria}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...categoria, nombre })
        }).then(async (response) => {
            if (response.ok) {
                Swal.fire({ icon: 'success', 
                title: 'Éxito', 
                text: 'Categoría modificada correctamente' });
                onActualizada();
            } else {
                const msg = await response.text();
                Swal.fire({ icon: 'error',
                title: 'Error', 
                text: msg || 'No se pudo modificar la categoría' });
            }
        });
    };

    return (
        <div className={EditarCategoriaStyle.centrar}>
            <form className={EditarCategoriaStyle.formulario} onSubmit={handleSubmit}>
                <h2 className={EditarCategoriaStyle.titulo}>Editar Categoría</h2>
                <div className={EditarCategoriaStyle.grupo}>
                    <label htmlFor="nombre" className={EditarCategoriaStyle.etiqueta}>Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className={EditarCategoriaStyle.entrada}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        pattern="[A-Za-z]+"
                        minLength={3}
                        maxLength={20}
                    />
                </div>
                <button type="submit" className={EditarCategoriaStyle.boton}>Guardar Cambios</button>
                <button type="button" onClick={onClose} className={EditarCategoriaStyle.botonCancelar}>Cancelar</button>
            </form>
        </div>
    );
}

export default EditarCategoria;
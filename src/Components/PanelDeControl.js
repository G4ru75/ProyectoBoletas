import React, {useState} from "react";
import PanelDeControlStyles from "../Styles/PanelDeControl.module.css";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";
import Evento from "./Evento";
import AgregarCategoria from "./AgregarCategoria";
import ListaCategorias from "./ListaCategoria";
import EditarCategoria from "./EditarCategoria"; // Nuevo componente
import {List, X} from "lucide-react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function PanelDeControl() {
    const [mostrarAgregarEvento, setMostrarAgregarEvento] = useState(false);
    const [mostrarAgregarCategoria, setMostrarAgregarCategoria] = useState(false);
    const [mostrarListaCategorias, setMostrarListaCategorias] = useState(false);

    // NUEVOS ESTADOS
    const [mostrarSeleccionarCategoria, setMostrarSeleccionarCategoria] = useState(false);
    const [modoSeleccionCategoria, setModoSeleccionCategoria] = useState(""); // "modificar" o "eliminar"
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleMostrarAgregarEvento = () =>{
        setMostrarAgregarEvento(true);
    }; 

    const handleCerrarAgregarEvento = () => {
        setMostrarAgregarEvento(false);
    }; 

    const handleAgregarEvento = () => {
        console.log("Evento agregado");
        handleCerrarAgregarEvento();
    };
    
    // Categorias
    const handleMostrarAgregarCategorias = () =>{
        setMostrarAgregarCategoria(true);
    }; 

    const handleCerrarAgregarCategorias = () => {
        setMostrarAgregarCategoria(false);
    }; 

    const handleAgregarCategorias = () => {
        console.log("categoria agregado");
        handleCerrarAgregarCategorias();
    }; 

    const handleMostrarListaCategorias = () => {
        setMostrarListaCategorias(true);
    }

    const handleCerrarListaCategorias = () => {
        setMostrarListaCategorias(false);
    }

    // NUEVAS FUNCIONES PARA MODIFICAR Y ELIMINAR
    const handleModificarCategoria = () => {
        setModoSeleccionCategoria("modificar");
        setMostrarSeleccionarCategoria(true);
    };

    const handleEliminarCategoria = () => {
        setModoSeleccionCategoria("eliminar");
        setMostrarSeleccionarCategoria(true);
    };

    // Cuando seleccionas una categoría de la lista
    const handleSeleccionarCategoria = (cat) => {
        setCategoriaSeleccionada(cat);
        setMostrarSeleccionarCategoria(false);
    };

    // Cuando se termina de editar o eliminar
    const handleCerrarEdicion = () => {
        setCategoriaSeleccionada(null);
        setModoSeleccionCategoria("");
        setMostrarListaCategorias(false);
        setTimeout(() => setMostrarListaCategorias(true), 500); // Refresca la lista
    };

    // Eliminar categoría
    const handleConfirmarEliminar = async () => {
        if (!categoriaSeleccionada) return;
        const token = Cookies.get('token');
        try {
            const response = await fetch(`https://localhost:7047/api/Categorias/${categoriaSeleccionada.id_Categoria}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                Swal.fire('Eliminada', 'Categoría eliminada correctamente', 'success');
                handleCerrarEdicion();
            } else {
                Swal.fire('Error', 'No se pudo eliminar la categoría', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'No se pudo eliminar la categoría', 'error');
        }
    };

    return (
        <>
        <NavbarAdmin />
        <div className={PanelDeControlStyles.centrarContenedor}>
            <div className={PanelDeControlStyles.contenedor}>
            <h1 className={PanelDeControlStyles.titulo}>Panel de control</h1>

            <section className={PanelDeControlStyles.seccion}>
                <h2 className={PanelDeControlStyles.subtitulo}>Eventos</h2>
                <div className={PanelDeControlStyles.botonesContenedor}>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonAgregar}`} onClick={handleMostrarAgregarEvento}>Agregar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonConsultar}`}>Consultar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonModificar}`}>Modificar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonEliminar}`}>Eliminar</button>
                </div>
            </section>

            <section className={PanelDeControlStyles.seccion}>
                <h2 className={PanelDeControlStyles.subtitulo}>Categoría de eventos</h2>
                <div className={PanelDeControlStyles.botonesContenedor}>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonAgregar}`} onClick={handleMostrarAgregarCategorias}>Agregar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonConsultar}`} onClick={handleMostrarListaCategorias}>Consultar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonModificar}`} onClick={handleModificarCategoria}>Modificar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonEliminar}`} onClick={handleEliminarCategoria}>Eliminar</button>
                </div>
            </section>

            <section className={PanelDeControlStyles.seccion}>
                <h2 className={PanelDeControlStyles.subtitulo}>Reportes</h2>
                <div className={PanelDeControlStyles.botonesContenedor}>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonAgregar}`}>Agregar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonConsultar}`}>Consultar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonModificar}`}>Modificar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonEliminar}`}>Eliminar</button>
                </div>
            </section>
            </div>
        </div>
        <Footer />

        {/* Modales */}
        {mostrarAgregarEvento && (
            <div className={PanelDeControlStyles.modal}>
                <div className={PanelDeControlStyles.modalContenido}>
                    <button onClick={handleCerrarAgregarEvento} className={PanelDeControlStyles.cerrarModal}><X size={50}/></button>
                    <Evento onAgregar={handleAgregarEvento}/>
                </div>
            </div>
        )}

        {mostrarAgregarCategoria && (
            <div className={PanelDeControlStyles.modal}>
                <div className={PanelDeControlStyles.modalContenido}>
                    <button onClick={handleCerrarAgregarCategorias} className={PanelDeControlStyles.cerrarModal}><X size={30}/></button>
                    <AgregarCategoria onAgregar={handleAgregarCategorias}/>
                </div>
            </div>
        )}

        {mostrarListaCategorias && (
            <div className={PanelDeControlStyles.modal}>
                <div className={PanelDeControlStyles.modalContenido}>
                    <button onClick={() => setMostrarListaCategorias(false)} className={PanelDeControlStyles.cerrarModal}><X size={30}/></button>
                    <ListaCategorias onClose={() => setMostrarListaCategorias(false)}/>
                </div>
            </div>
        )}

        {/* MODAL PARA SELECCIONAR CATEGORÍA */}
        {mostrarSeleccionarCategoria && (
            <div className={PanelDeControlStyles.modal}>
                <div className={PanelDeControlStyles.modalContenido}>
                    <button onClick={() => setMostrarSeleccionarCategoria(false)} className={PanelDeControlStyles.cerrarModal}><X size={30}/></button>
                    <ListaCategorias
                        modoSeleccion
                        onSeleccionarCategoria={handleSeleccionarCategoria}
                        onClose={() => setMostrarSeleccionarCategoria(false)}
                    />
                </div>
            </div>
        )}

        {/* MODAL PARA EDITAR CATEGORÍA */}
        {categoriaSeleccionada && modoSeleccionCategoria === "modificar" && (
            <div className={PanelDeControlStyles.modal}>
                <div className={PanelDeControlStyles.modalContenido}>
                    <button onClick={handleCerrarEdicion} className={PanelDeControlStyles.cerrarModal}><X size={30}/></button>
                    <EditarCategoria
                        categoria={categoriaSeleccionada}
                        onClose={handleCerrarEdicion}
                        onActualizada={handleCerrarEdicion}
                    />
                </div>
            </div>
        )}

        {/* MODAL PARA CONFIRMAR ELIMINACIÓN */}
        {categoriaSeleccionada && modoSeleccionCategoria === "eliminar" && (
            <div className={PanelDeControlStyles.modal}>
                <div className={PanelDeControlStyles.modalContenido}>
                    <button onClick={handleCerrarEdicion} className={PanelDeControlStyles.cerrarModal}><X size={30}/></button>
                    <p>¿Seguro que deseas eliminar la categoría <b>{categoriaSeleccionada.nombre}</b>?</p>
                    <button style={{ color: "red", marginRight: 10 }} onClick={handleConfirmarEliminar}>Eliminar</button>
                    <button onClick={handleCerrarEdicion}>Cancelar</button>
                </div>
            </div>
        )}
        </>
    )
}

export default PanelDeControl;
import React, {useState} from "react";
import PanelDeControlStyles from "../Styles/PanelDeControl.module.css";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";
import Evento from "./Evento";
import AgregarCategoria from "./AgregarCategoria";
import ListaCategorias from "./ListaCategoria";
import {List, X} from "lucide-react";


function PanelDeControl() {

    const [mostrarAgregarEvento, setMostrarAgregarEvento] = useState(false);
    const [mostrarAgregarCategoria, setMostrarAgregarCategoria] = useState(false);
    const [mostrarListaCategorias, setMostrarListaCategorias] = useState(false);


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
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonConsultar}`} onClick={() => setMostrarListaCategorias(true)}>Consultar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonModificar}`}>Modificar</button>
                <button className={`${PanelDeControlStyles.boton} ${PanelDeControlStyles.botonEliminar}`}>Eliminar</button>
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

        //Modales pe

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

        </>
    )
}

export default PanelDeControl;

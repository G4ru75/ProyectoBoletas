import react from 'react';
import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import BarraBusquedaStyle from '../Styles/BarraBusqueda.module.css';

function BarraBusqueda() {

    const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
    const [Categorias, setCategorias] = useState([]); 

    useEffect(() => {
            fetch("https://localhost:7047/api/Categorias", {
            })
            .then(res => res.json())
            .then(data => {
                setCategorias(data);
            });
        }, []);


    const toggleFiltros = () => {
        setFiltrosAbiertos(!filtrosAbiertos);
    };

    return (
        <>
            <div className={BarraBusquedaStyle.searchBar}>
            <input type="text" placeholder="BUSCAR...." className={BarraBusquedaStyle.searchInput} />

            {/* aqui se ve normal pantallas normales */}
            <div className={BarraBusquedaStyle.filtersDesktop}>
            <input type="date" placeholder="Fecha" className={BarraBusquedaStyle.filter} />
            <select className={BarraBusquedaStyle.filter}>
                <option value="" >Categoria</option>
                {Categorias.map((cat) => (
                        <option key={cat.id_Categoria} value={cat.nombre}>{cat.nombre}</option>
                ))}
            </select>
            </div>

            {/* Botón de filtros para pantallas pequeñas */}
            <button className={BarraBusquedaStyle.filterToggle} onClick={toggleFiltros} aria-expanded={filtrosAbiertos}>
            {filtrosAbiertos ? <X size={20} /> : <Filter size={20} />}
            <span>Filtros</span>
            </button>

            <button className={BarraBusquedaStyle.searchButton}>
            <Search size={30} color="white" strokeWidth={4} />
            </button>
        </div>

        {/* Panel de filtros para móvil */}
        {filtrosAbiertos && (
            <div className={BarraBusquedaStyle.filtersMobile}>
            <div className={BarraBusquedaStyle.filterItem}>
                <label>Fecha:</label>
                <input type="date" className={`${BarraBusquedaStyle.filter} ${BarraBusquedaStyle.FondoBlanco}`} />
            </div>
            <div className={BarraBusquedaStyle.filterItem}>
                <label>Categoría:</label>
                <select className={`${BarraBusquedaStyle.filter} ${BarraBusquedaStyle.FondoBlanco}`}>
                <option value="" >Selecciona una categoria</option>
                {Categorias.map((cat) => (
                        <option key={cat.id_Categoria} value={cat.nombre}>{cat.nombre}</option>
                ))}
                </select>
            </div>
            </div>
        )}

        </>
    );
}


export default BarraBusqueda;
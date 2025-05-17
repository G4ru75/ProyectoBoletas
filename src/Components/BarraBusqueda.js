import react from 'react';
import BarraBusquedaStyle from '../Styles/BarraBusqueda.module.css';

function BarraBusqueda() {

    return (
        <>
        <div className={BarraBusquedaStyle.searchBar}>
        <input
        type="text"
        placeholder="BUSCAR...."
        className={BarraBusquedaStyle.searchInput}
        />
        <input type='date' className={BarraBusquedaStyle.filter}></input>
        <select className={BarraBusquedaStyle.filter}>
        <option>Categoría</option>
        <option value="Seminario">Seminario</option>
        <option value="Concierto">Concierto</option>
        <option value="Conferencia">Conferencia</option>
        </select>
        <button className={BarraBusquedaStyle.searchButton}>
        🔍
        </button>
    </div>
        </>
    );
}


export default BarraBusqueda;
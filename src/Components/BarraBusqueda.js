import react from 'react';
import { Search, Calendar } from 'lucide-react';
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
            
            <input type='date' placeholder='Fecha' className={BarraBusquedaStyle.filter}/>

            <select className={BarraBusquedaStyle.filter}>
            <option>Categoría</option>
            <option value="Seminario">Seminario</option>
            <option value="Concierto">Concierto</option>
            <option value="Conferencia">Conferencia</option>
            </select>

            <button className={BarraBusquedaStyle.searchButton}>
            <Search size={30} color='white' strokeWidth={4} />
            
            </button>
        </div>
        </>
    );
}


export default BarraBusqueda;
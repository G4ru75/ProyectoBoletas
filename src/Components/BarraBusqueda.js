function BarraBusqueda() {

    return (
        <>
    <div className="flex items-center gap-2 p-2 bg-gray-200 rounded-full w-3/6 mx-auto my-20">
        <input
        type="text"
        placeholder="BUSCAR...."
        className="flex-grow border-none outline-none text-gray-700 placeholder-gray-500"
        />
        <input type='date' placeholder='Fecha' className="bg-white rounded-full px-4 py-2 outline-none text-gray-700"></input>
        <select className="bg-white rounded-full px-4 py-2 outline-none text-gray-700">
        <option>Categoría</option>
        <option value="Seminario">Seminario</option>
        <option value="Concierto">Concierto</option>
        <option value="Conferencia">Conferencia</option>
        </select>
        <button className="bg-sky-950 p-3 rounded-full "> 
        🔍
        </button>
    </div>
        </>
    );
}


export default BarraBusqueda;



function GenerarReporte() {
    return (
    <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Generar reporte</h1>

        <div className="bg-gray-100 rounded-2xl p-8 shadow-md">
            <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                <div className="mb-6">
                    <label htmlFor="tituloReporte" className="block text-xl font-semibold mb-2">
                    Titulo reporte
                    </label>
                    <input type="text" id="tituloReporte" className="border rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="descripcion" className="block text-xl font-semibold mb-2">
                    Descripción
                    </label>
                    <textarea id="descripcion" className="w-full h-48 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"required/>
                </div>
            </div>


            <div>
                <div className="mb-6">
                    <label htmlFor="evento" className="block text-xl font-semibold mb-2">
                    evento
                    </label>
                    <select id="evento" className="border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"required>
                        <option value="">Seleccione</option>
                        <option value="1">Concierto Rock</option>
                        <option value="2">Festival de Jazz</option>
                        <option value="3">Obra de Teatro</option>
                        <option value="4">Evento Deportivo</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="idEvento" className="block text-xl font-semibold mb-2">
                    Id evento
                    </label>
                    <select id="idEvento" className="border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"required>
                        <option value="A001">001 </option>
                        <option value="A002">002 </option>
                        <option value="A003">003 </option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="aforoMaximo" className="block text-xl font-semibold mb-2">
                    Aforo maximo
                    </label>
                    <input type="text" id="aforoMaximo" className="border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"readOnly/>
                </div>

                <div className="mb-6">
                    <label htmlFor="totalEntradasVendidas" className="block text-xl font-semibold mb-2">
                    Total entradas vendidas
                    </label>
                    <input type="text" id="totalEntradasVendidas" className="border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"readOnly/>
                </div>

                <div className="mb-6">
                    <label htmlFor="totalAsistencias" className="block text-xl font-semibold mb-2">
                    Total asistencias
                    </label>
                    <input type="text" id="totalAsistencias" className="border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"readOnly/>
                </div>
            </div>
            </div>

            <div className="flex justify-center text-3xl mt-8">
            <button type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-16 focus:outline-none transform transition-all hover:scale-105"
            >
                Generar
            </button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default GenerarReporte
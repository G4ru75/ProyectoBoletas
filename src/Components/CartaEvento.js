function CartaEvento() {
    return (
        <>
            <div className="bg-gray-200 rounded-lg p-4 max-w-sm mx-auto">
                <div className=" bg-white rounded-lg h-80 flex items-center justify-center mb-6 overflow-hidden">
                    <img src="/imagenes/Captura de pantalla 2024-12-01 193725.png" alt="Evento" className="w-full h-full object-contain"
                    />
                </div>

                <div className="p-4 flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gray-800 m-0 text-center">Evento</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                            {/* <Clock className="text-blue-500 mt-0.5 w-4 h-4" size={16} /> */}
                            <div>
                                <span className="block text-sm font-bold text-gray-500 mb-0.5">Hora</span>
                                <p className="text-base text-gray-800 font-medium">2222</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            {/* <Calendar className="text-blue-500 mt-0.5 w-4 h-4" size={16}/> */}
                            <div>
                                <span className="block text-sm font-bold text-gray-500 mb-0.5">Fecha</span>
                                <p className="text-base text-gray-800 font-medium">2222</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            {/* <Timer className="text-blue-500 mt-0.5 w-4 h-4" size={16}/> */}
                            <div>
                                <span className="block text-sm font-bold text-gray-500 mb-0.5">Duracion</span>
                                <p className="text-base text-gray-800 font-medium">2222</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            {/* <MapPin className="text-blue-500 mt-0.5 w-4 h-4" size={16}/> */}
                            <div>
                                <span className="block text-sm font-bold text-gray-500 mb-0.5">Lugar</span>
                                <p className="text-base text-gray-800 font-medium">2222</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105 inline-flex">
                    Comprar
                </button>
            </div>
        </>
    );
}

export default CartaEvento;
import Footer from "./Footer"
import NavBar from "./navbar"
import { useNavigate, useLocation } from "react-router-dom"

function CompraBoleta() {

    const navigate = useNavigate();
    const Location = useLocation();
    const evento = Location.state?.evento;
    
    if (!evento) {
        return <p className='text-center mt-10 text-red-500'>No se ha seleccionado ningún evento.</p>;
    }

    const fechaCompleta = new Date(evento.fecha); // Toma la fecha del evento en formato Date
    const fecha = fechaCompleta.toLocaleDateString(); 
    const hora = fechaCompleta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Formatea la hora
    //las separa y formatea la fecha y hora en formatos string y de manera local


    const IrAEspecificacionCompra = () => {
        navigate("/especificacionCompra");
    }

return (
    <>
    <NavBar/>
    <div className="container mx-auto p-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4">


        <div className="bg-gray-200 rounded-lg p-6 flex-1">
            <h2 className="text-xl font-bold text-center mb-6">INFORMACIÓN EVENTO</h2>

            <div className="space-y-6">
            <div>
                <p className="font-semibold text-gray-800 mb-1">Lugar</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{evento.nombre_Lugar}</p>
            </div>
            <div>
                <p className="font-semibold text-gray-800 mb-1">Direccion</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{evento.direccion_Lugar}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Fecha</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{fecha}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Hora</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{hora}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Categoría</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{evento.categoria}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Entradas disponibles</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{evento.tickets_Disponible}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Estado</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{evento.estado ? "Abierto" : "cerrado"}</p>
            </div>
            </div>


            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105"
            onClick={IrAEspecificacionCompra}>COMPRAR
            </button>
        </div>

        <div className="bg-gray-200 rounded-lg p-6 flex-1">
        {evento.imagen ? (
            <div className="bg-gray rounded-lg h-80 flex items-center justify-center mb-6 overflow-hidden">
            <img src={`data:image/jpeg;base64,${evento.imagen}`} alt={`Imagen de evento`}className="w-full h-full object-contain"
            
            />

            </div>
            ) : (
            <div className="bg-white rounded-lg h-80 flex items-center justify-center mb-6">
                <p className="text-gray-700 font-medium">Imagen Evento</p>
            </div>
            )}

        <div className="flex justify-between mb-4">
            <div>
                <p className="font-semibold text-gray-800">Nombre</p>
                <p className="text-gray-700">{evento.nombre_Evento}</p>
            </div>
            <div>
                <p className="font-semibold text-gray-800">Precio</p>
                <p className="text-gray-700">{evento.precioTicket}</p>
            </div>
            </div>

            <div className="mt-4">
                <p className="font-semibold text-gray-800 text-center mb-2">Descripción del evento</p>
                <p className="text-gray-700 text-sm">{evento.descripcion}</p>
            </div>
        </div>

    </div>
    </div>
    <Footer/>
    </>
    )
}
export default CompraBoleta
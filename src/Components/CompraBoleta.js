import Footer from "./Footer"
import NavBar from "./navbar"
import { useNavigate } from "react-router-dom"

function CompraBoleta({ evento }) {
    const {
    nombre = "Evento de 2",
    precio = "2000000",
    imagen = "",
    descripcion = "Un evento increible e espeknjnc",
    lugar = "colombia",
    fecha = "22-09-23",
    hora = "10:20 AM",
    duracion = "30 minutos",
    categoria = "Concierto",
    entradasDisponibles = "300",
    estado = "NO se",
    } = evento || {}

    const navigate = useNavigate();

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
                <p className="text-gray-700 border-b border-gray-400 pb-1">{lugar}</p>
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
                <p className="font-semibold text-gray-800 mb-1">Duración</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{duracion}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Categoría</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{categoria}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Entradas disponibles</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{entradasDisponibles}</p>
            </div>

            <div>
                <p className="font-semibold text-gray-800 mb-1">Estado</p>
                <p className="text-gray-700 border-b border-gray-400 pb-1">{estado}</p>
            </div>
            </div>

            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105"
            onClick={IrAEspecificacionCompra}>COMPRAR
            </button>
        </div>

        <div className="bg-gray-200 rounded-lg p-6 flex-1">
        {imagen ? (
            <div className="bg-white rounded-lg h-80 flex items-center justify-center mb-6 overflow-hidden">
            <img src={imagen || ""} alt={`Imagen de ${nombre}`}className="w-full h-full object-contain"
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
                <p className="text-gray-700">{nombre}</p>
            </div>
            <div>
                <p className="font-semibold text-gray-800">Precio</p>
                <p className="text-gray-700">{precio && `$${precio}`}</p>
            </div>
            </div>

            <div className="mt-4">
                <p className="font-semibold text-gray-800 text-center mb-2">Descripción del evento</p>
                <p className="text-gray-700 text-sm">{descripcion}</p>
            </div>
        </div>

    </div>
    </div>
    <Footer/>
    </>
    )
}
export default CompraBoleta
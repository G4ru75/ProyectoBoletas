import NavBar from './navbar';
import Footer from './Footer';

function EspecificacionDeCompra({ handleClose }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario enviado');
    };



return (
    <>
    <NavBar />
    <form className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-4xl mx-auto my-8"> 
    <div className="mb-4">
        <div className="relative">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">COMPRAR ENTRADAS</h1>
        <div className="border-2 border-blue-500 mb-6"></div>
        <form onSubmit={handleSubmit}> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="mb-3">
                <label className="block text-sm font-bold mb-1">NOMBRE EVENTO</label>
                <input type="text" placeholder="Nombre" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required readOnly />
            </div>
                
            <div className="mb-3">
                <label className="block text-sm font-bold mb-1">CATEGORIA DE ENTRADA</label>
                <input type="text" placeholder="Categoría" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required readOnly />
            </div>
            <div className="mb-3">
                <label className="block text-sm font-bold mb-1">PRECIO</label>
                <input type="text" placeholder="Precio" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required readOnly />
            </div>
            <div className="mb-3">
                <label className="block text-sm font-bold mb-1">CANTIDAD</label>
                <input type="number" placeholder="Cantidad" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>

            <div className="md:col-span-2 mb-3">
                <label className="block text-sm font-bold mb-1">TOTAL:</label>
                <input type="text" placeholder="Total" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" readOnly/>
            </div>

            <div className="md:col-span-2 mb-4">
                <label className="block text-sm font-bold mb-1">SELECCIONA METODO DE PAGO</label>
                <div className="space-y-2">
                <div>
                    <input className="h-4 w-4  border-gray-300 rounded" type="radio" name="metodoPago" id="tarjetaDebito" value="tarjetaDebito"
                    />
                    <label className="ml-2 block text-sm text-gray-700" htmlFor="tarjetaDebito">Tarjeta de debito</label>
                    </div>

                    <div >
                    <input className="h-4 w-4 border-gray-300 rounded" type="radio" name="metodoPago" id="tarjetaCredito" value="tarjetaCredito"
                    />
                    <label className="ml-2 block text-sm text-gray-700" htmlFor="tarjetaCredito">Tarjeta de credito</label>
                    </div>

                    <div>
                    <input className="h-4 w-4 border-gray-300 rounded" type="radio" name="metodoPago" id="transferenciaPse"value="transferenciaPse"/>
                    <label className="ml-2 block text-sm text-gray-700" htmlFor="transferenciaPse">Transferencia por pse</label>
                    </div>
                </div>
                </div>
            </div>
            <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transform transition-all hover:scale-105"
            >
                COMPRAR
            </button>
            </form>
        </div>
        </div>
    </form>
    <Footer />
    </>
    );
    }

    export default EspecificacionDeCompra;
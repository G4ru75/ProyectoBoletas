import React, { useState, useEffect } from 'react';

function Evento({ eventoInicial, onAgregar, onModificar }) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipoBoleta, setTipoBoleta] = useState('');
    const [categoria, setCategoria] = useState('');
    const [aforo, setAforo] = useState('');
    const [lugar, setLugar] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [imagen, setImagen] = useState('');
    const [duracion, setDuracion] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (eventoInicial) {
            setNombre(eventoInicial.nombre || '');
            setPrecio(eventoInicial.precio || '');
            setTipoBoleta(eventoInicial.tipoBoleta || '');
            setCategoria(eventoInicial.categoria || '');
            setAforo(eventoInicial.aforo || '');
            setLugar(eventoInicial.lugar || '');
            setFecha(eventoInicial.fecha || '');
            setHora(eventoInicial.hora || '');
            setImagen(eventoInicial.imagen || '');
            setDuracion(eventoInicial.duracion || '');
            setDescripcion(eventoInicial.descripcion || '');
        }
    }, [eventoInicial]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const evento = {
            nombre,
            precio,
            tipoBoleta,
            categoria,
            aforo,
            lugar,
            fecha,
            hora,
            imagen,
            duracion,
            descripcion,
        };
        if (eventoInicial) {
            onModificar(eventoInicial.id, evento);
        } else {
            onAgregar(evento);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className='bg-gray-100 p-6  rounded-xl  w-full max-w-4xl mx-auto my-8'>
            <h1 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>GESTIÓN EVENTO</h1>
            <div className="border-b-4 border-blue-500 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="mb-4" >

                    <label class="text-gray-700 text-sm font-bold mb-2">Nombre</label>

                    <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
                    className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label  class="text-gray-700 text-sm font-bold mb-2">Precio</label>
                    <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} 
                    className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required/>

                </div>

                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">Categoria</label>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}
                        className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"required>
                        <option value="concierto">Concierto</option>
                        <option value="deporte">Deporte</option>
                        <option value="teatro">Teatro</option>
                    </select>
                </div>
    
                <div className="mb-4">
                    <label  className="text-gray-700 text-sm font-bold mb-2">Aforo</label>
                    <input type="text" placeholder="Aforo" value={aforo} onChange={(e) => setAforo(e.target.value)} 
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-700 text-sm font-bold mb-2">Lugar</label>
                    <input type="text" placeholder="Lugar" value={lugar} onChange={(e) => setLugar(e.target.value)}
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
    
                <div className="mb-4">
                    <label  className=" text-gray-700 text-sm font-bold mb-2">Fecha</label>
                    <input type="date" placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} 
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">Hora</label>
                    <input type="time" placeholder="Hora" value={hora} onChange={(e) => setHora(e.target.value)} 
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue 500" required/>
                </div>
    
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">Imagen</label>
                    <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.value)} 
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">Duracion</label>
                    <input type="text" placeholder="Duracion" value={duracion} onChange={(e) => setDuracion(e.target.value)} 
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
    
                <div className='mb-6 md:col-span-2'>
                    <label>Descripcion</label>
                    <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4"
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
    
            </div>
            <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 focus:outline-none transform transition-all hover:scale-105'>Aceptar</button>
        </form>
    );

}   
export default Evento;
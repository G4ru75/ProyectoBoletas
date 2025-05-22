import { Minimize } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

function Evento({ eventoInicial, onAgregar, onModificar }) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipoBoleta, setTipoBoleta] = useState('');
    const [categoria, setCategoria] = useState([]);
    const [aforo, setAforo] = useState('');
    const [lugar, setLugar] = useState('');
    const [direccion, setDireccion] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [imagen, setImagen] = useState('');
    const [duracion, setDuracion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    useEffect(() => {
        const token = Cookies.get('token');
        fetch("https://localhost:7047/api/Categorias", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            const mensaje = await response.text(); // Leer como texto, igual que en Login.js
            if (!response.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: mensaje || 'No se pudieron obtener las categorías',
                });
                setCategoria([]);
            } else {
                let data = [];
                try {
                    data = JSON.parse(mensaje); // Parsear a JSON si es exitoso
                } catch (e) {
                    data = [];
                }
                setCategoria(data);
            }
            
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error de conexión con el servidor',
            }); 
        });
    }, []);

    const handleSubmit = (e) => {
            e.preventDefault();
    
            const Evento = {
                nombre_Evento: nombre,
                descripcion: descripcion,
                nombre_Lugar: lugar,
                direccion_Lugar: direccion,
                fecha: new Date(`${fecha}T${hora}`).toISOString(),
                aforo_Max: Number(aforo),
                precioTicket: Number(precio),
                id_Categoria: Number(categoria),

            }
    
            const token = Cookies.get('token'); 
            console.log(token);
            console.log(Evento);
            
            fetch("https://localhost:7047/api/Eventos", {
                method: "POST",
                headers: {
                "Authorization": `Bearer ${token}`, //Token de autenticacion 
                "Content-Type": "application/json"
                },
    
                body: JSON.stringify(Evento)
            }).then((response) => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: 'Evento agregada correctamente',
                    });
                    setNombre("");
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo agregar el evento',
                    });
                    console.log(response);
                    console.log(Evento);
                    console.log(token);
                }
            });
        }
    
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
                    <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} min={1} pattern='[0-9]+' 
                    className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" required/>

                </div>

                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">Categoria</label>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}
                        className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"required>
                        <option value="">Seleccione una categoria</option>
                        {categoria.map((cat) => (
                            <option key={cat.id_Categoria} value={cat.id_Categoria}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>
    
                <div className="mb-4">
                    <label  className="text-gray-700 text-sm font-bold mb-2">Aforo</label>
                    <input type="text" placeholder="Aforo" value={aforo} onChange={(e) => setAforo(e.target.value)} min={1} pattern='[0-9]+'
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
                <div className="mb-4">
                    <label className=" text-gray-700 text-sm font-bold mb-2">Lugar</label>
                    <input type="text" placeholder="Nombre del lugar" value={lugar} onChange={(e) => setLugar(e.target.value)}
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                <div className="mb-4">
                    <label className=" text-gray-700 text-sm font-bold mb-2">Direccion</label>
                    <input type="text" placeholder="Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}
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
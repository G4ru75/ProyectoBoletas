import { Minimize } from 'lucide-react';
import React, { useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

function EditarEvento({ evento, onClose, onModificar }) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipoBoleta, setTipoBoleta] = useState('');
    const [categoria, setCategoria] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [aforo, setAforo] = useState('');
    const [lugar, setLugar] = useState('');
    const [direccion, setDireccion] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [imagen, setImagen] = useState(null);
    const [verImagen, setVerImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const[Entradas_Disponibles, setEntradas_Disponibles] = useState('');
    const [Estado, setEstado] = useState(true);

    const handleImagen = (e) => {
        const file = e.target.files[0]; 
        if(file){
            setImagen(file);
            setVerImagen(URL.createObjectURL(file)); 
        }
    };  

    useEffect(() => {
        console.log("Evento recibido:", evento);
        if(evento){
            setNombre(evento.nombre_Evento);
            setPrecio(evento.precioTicket);
            setTipoBoleta(evento.tipo_Boleta);
            setCategoriaSeleccionada(evento.categoria);
            setAforo(evento.aforo_Max);
            setLugar(evento.nombre_Lugar);
            setDireccion(evento.direccion_Lugar);
            setEntradas_Disponibles(evento.tickets_Disponible);
            setDescripcion(evento.descripcion); 
        }
    }, [evento]);

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

    const handleSubmit = async (e) => {

        
            e.preventDefault();

            const FechaHora = `${fecha}T${hora}`; // Combina fecha y hora en un solo string

            //Se usa formData porque en el back no acaptara el json por enciar la imagen
            const formEvento = new FormData(); 
            formEvento.append('Nombre_Evento', nombre);
            formEvento.append('Descripcion', descripcion);
            formEvento.append('Nombre_Lugar', lugar);
            formEvento.append('Direccion_Lugar', direccion);
            formEvento.append('Fecha', FechaHora);
            formEvento.append('Aforo_Max', aforo);
            formEvento.append('PrecioTicket', precio);
            formEvento.append('Tickets_Disponible', Entradas_Disponibles);
            formEvento.append('Estado', Estado);
            formEvento.append('Categoria', categoriaSeleccionada);
            formEvento.append('Imagen', imagen); // Agregar la imagen al FormData
    
            const token = Cookies.get('token'); 
            
            const confirm = await Swal.fire({
                title: `Modificar el evento "${evento.nombre_Evento}"?`,
                text: "Esta acción no se puede deshacer.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, modificar',
                cancelButtonText: 'Cancelar'
            });

            if(confirm.isConfirmed){
                    fetch(`https://localhost:7047/api/Eventos/${evento.id_Evento}`, {
                    method: "PUT",
                    headers: {
                    "Authorization": `Bearer ${token}`, //Token de autenticacion 
                    //"Content-Type": "application/json"  no se usa porque no se envia datos en forma de JSon
                    },
        
                    body:formEvento // se envia el formEvento
                }).then((response) => {
                    if (response.ok) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Éxito',
                            text: 'Evento modificado correctamente',
                        });
                        setNombre("");
                        setPrecio("");
                        setTipoBoleta("");
                        setCategoriaSeleccionada("");
                        setAforo("");
                        setLugar("");
                        setDireccion("");
                        setFecha("");
                        setHora("");
                        setImagen(null);
                        setVerImagen("");
                        setDescripcion("");
                        setEntradas_Disponibles("");
                        setEstado(true);
                        onClose(); // Cerrar el modal o formulario
                        
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo agregar el evento',
                        });
                        console.log(response);
                        console.log(formEvento);
                        console.log(token);
                    }
                });
            }else{
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Modificación cancelada',
                })
            }
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
                    <select value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                        className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"required>
                        <option value="">Seleccione una categoria</option>
                        {categoria.map((cat) => (
                            <option key={cat.id_Categoria} value={cat.nombre}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>
    
                <div className="mb-4">
                    <label  className="text-gray-700 text-sm font-bold mb-2">Aforo</label>
                    <input type="text" placeholder="Aforo" value={aforo} onChange={(e) => setAforo(e.target.value)} min={1} pattern='[0-9]+'
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                <div className="mb-4">
                    <label  className="text-gray-700 text-sm font-bold mb-2">Entradas disponibles</label>
                    <input type="text" placeholder="Numero de estradas disponibles" value={Entradas_Disponibles} onChange={(e) => setEntradas_Disponibles(e.target.value)} min={1} pattern='[0-9]+'
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
                    <label className="text-gray-700 text-sm font-bold mb-2">Estado</label>
                    <select value={Estado} onChange={(e) => setEstado(e.target.value)}
                        className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"required>
                        <option value="">Seleccione el nuevo estado</option>
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                    </select>
                </div>
    
                <div className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">Imagen</label>
                    <label htmlFor='Imagen' className="cursor-pointer border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Selecciona una imagen
                    </label>
                    <input type="file" accept="image/*" id='Imagen' onChange={handleImagen} style={{ display: 'none' }}
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                {verImagen && (
                    <div className="mt-2">
                        <img src={verImagen} alt="Vista previa" className="w-32 h-32 object-cover border rounded-md" />
                    </div>
                )}
    
                <div className='mb-6 md:col-span-2'>
                    <label>Descripcion</label>
                    <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="4"
                    className=" border rounded-md w-full py-2 px-3 text-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
    
            </div>
            <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 focus:outline-none transform transition-all hover:scale-105'>Modificar</button>
        </form>
    );

}   
export default EditarEvento;
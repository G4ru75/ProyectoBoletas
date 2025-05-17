import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Components/SignUp';
import Login from './Components/Login';

import BarraBusqueda from './Components/BarraBusqueda';
import CartaEvento from './Components/CartaEvento';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import ListaEventos from './Components/ListaEventos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navbar/>
    <BarraBusqueda/>
    <h1>Eventos disponibles</h1>
    <ListaEventos/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

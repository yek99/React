import React from 'react';
import '../styles/vistaeditar.css';
import logo from '../assets/logo.png';


const Editar = () =>{
    return(
        <>
        <div className="edit-box">
        <img src={logo} className="avatar" alt="Avatar Image"/>
        <h1>Editar Venta</h1>
        <h3>ID: 001</h3>
        <form>
            <p>
               
                <label for="username">Producto</label>
                <input id="username" type="text" placeholder="Ingrese el nombre del producto"/>
            </p>
            <p>
                
                <label for="precio">Precio</label>
                <input id="precio" type="number" placeholder="Ingrese el precio del producto"/>
            </p>
            
            
            <label for="marca">Marca</label>
            <input id="marca" type="text" placeholder="Ingrese la marca del producto"/>
            

            {/* <a href ='Loguin'>Volver al inicio</a><br></br> */}

        </form>
    </div>
        </>
    );
};
export default Editar;
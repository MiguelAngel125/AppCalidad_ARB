import React from 'react';
import Tabla from '../Tabla_1/Tabla';
import '../navbar/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar=({cerrarSesion}) =>{
    return(    
<div>
<nav class="navbar">
  <div class="container-fluid">
        <h3>Consultas de control de calidad</h3>
    <form class="d-flex">
    <button class="btn btn-success" type="button" >Exportar</button>
        <div class="form-date">
          <h5>Desde: </h5>
          <input type="date" class="calendario"/>
          <h5>Hasta: </h5>
          <input type="date" class="calendario"/>
        </div>         
          <button class="btn btn-primary" type="button" >Actualizar</button>            
          <button onClick={cerrarSesion} class="btn btn-danger">X</button>          
    </form>
  </div>
</nav>
        <Tabla/>
</div>  

);
};

export default Navbar;
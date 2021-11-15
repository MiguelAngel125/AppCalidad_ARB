import React,{useState} from 'react';
import Container from '../Tabla_1/Container';
import Grafico from '../componentes/Grafico'
import './navbar.css'
import { CSVLink} from 'react-csv' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt,faImages,faAngleDoubleDown,faFileExport, faRedo} from '@fortawesome/free-solid-svg-icons';


let iconExit=<FontAwesomeIcon icon={faSignOutAlt}/>;
let iconImages=<FontAwesomeIcon icon={faImages}/>;
let iconGrafico=<FontAwesomeIcon icon={faAngleDoubleDown}/>;
let iconExportar=<FontAwesomeIcon icon={faFileExport}/>;
let iconActualizar=<FontAwesomeIcon icon={faRedo}/>


let estiloBotonGrafico={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:2}
let estiloBotonActualizar={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:'1vw'}
let estiloBotonExportar={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:10,padding:10.5}
let estiloBotonGaleria={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:'55vw'}
let estiloBotonSalir={width:45,height:45,backgroundColor:'red',borderColor:'red',color:'#fff',marginLeft:10,marginTop:'1vh'}



function Navbar() {


  const [mostrarGrafico,setMostrarGrafico]=useState(false)


const abrirGrafico=()=>{
  setMostrarGrafico(true);
  }
  const cerrarGrafico=()=>{
    setMostrarGrafico(false);
    }




    const [mostrar,setMostrar]=useState(false);
    const mostrardata=()=>{
      setMostrar(true)
      }




      function sayHello(names){
        alert('Hello ' + names)
      }
  return( 
    <>


<nav style={{ color: 'white', backgroundColor: '#1C2B36', height: 54, fontSize: 25, display:'flex', justifyContent:'space-around', flexDirection:'row'  }}>  
      <button className='btn' style={estiloBotonGrafico} onClick={()=>abrirGrafico()}>{iconGrafico}</button>     

      <button className='btn'style={estiloBotonActualizar} /*onClick={(e) => { if (window.confirm('Hay ' + index_1 + ' Registros. Desea continuar?')) mostrardata() } }*/>{iconActualizar}</button>
      






             
      <CSVLink data={'data'} separator={';'} filename={'Calidad.csv'} className='btn' style={estiloBotonExportar} > {iconExportar}  </CSVLink>
      <button className='btn'style={estiloBotonGaleria} onClick={'()=>abrirModal()'}>{iconImages}</button>
      <button className='btn'style={estiloBotonSalir} onClick={'()=>cerrarSesion()'}>{iconExit}</button>    
    </nav>

    <Grafico
      mostrarGrafico={mostrarGrafico}
      cerrarGrafico={cerrarGrafico}/>

































      <div className="table-responsive">   

      
        
<Container names='empaque' childClicked={(names)=>sayHello(names)}/>


      </div>
  </>
  );
};

export default Navbar;


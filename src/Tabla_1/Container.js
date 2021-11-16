import React,{useState,Fragment} from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import Modal from '../componentes/Modal';
import '../Tabla_1/Tabla.css';
import NavbarResumen from '../componentes/NavbarResumen';
import VentanaFoto from '../componentes/VentanaFoto';


export const Container=({datatest,t5,t4,t3,t2,t1,promCalidad,promCat1,promcat2,columna,Abierto,cerrarModal})=>{


const[mostrarVentana,setmostrarVentana]=useState(false);
const[modalAbierto,setmodalAbierto]=useState(false);


  const abrirVentana=()=>{
    setmostrarVentana(true);
    }

  const cerrarVentana=()=>{
    setmostrarVentana(false);
    }

  const abrirModal=()=>{
    setmodalAbierto(true);
    }

  const cerrarModa=()=>{
    setmodalAbierto(false);
    }

//let fecha2=item.Fecha;
//console.log(fecha2)
function Time(e) {
  var F = new Date(e*1000);
    return F.getUTCFullYear() +
      '-' + ('0' + F.getUTCMonth()).slice(-2) +
      '-' + ('0' + F.getUTCDate()).slice(-2)        
  };
//console.log(Time(1635908400))
//console.log(Time(fecha2))

return (   
<Fragment>




  
    <NavbarResumen 
      t5={t5}
      t4={t4} 
      t3={t3}
      t2={t2}
      t1={t1}
      promCalidad={promCalidad}
      promCat1={promCat1}
      promcat2={promcat2}/>     

    <Table
      columns={columna}
      dataSource={datatest}    
      pagination={false}
      size="small"
      scroll={{ y: 1000}}  
      /* onChange={onChange}*//>

    <Modal 
      Abierto={!modalAbierto}
      cerrarModa={cerrarModal}/>




    <VentanaFoto
      mostrarVentana={!mostrarVentana}
      cerrarVentana={cerrarVentana}/>



      

</Fragment>       
  )
}
export default Container  ;




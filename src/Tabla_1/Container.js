import React,{useState,useEffect,Fragment} from 'react'
import {Grilla} from './Tabla';
import db from '../conex/fire';
//import "../Tabla_1/Tabla.css";
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt,faImages,faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'


export const Container=()=>{
const [calidad, setCalidad]=useState([]);

useEffect(()=>{
     
db.firestore().collection('dbcalidad')
.onSnapshot(snap=>{
    const documents =[];
    snap.forEach(doc => {
        documents.push({id:doc.id, ...doc.data()})           
    });
    setCalidad(documents);

})
})

const {RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
let calendario=<RangePicker 
defaultValue={[moment('14/10/2021', dateFormat),moment('14/10/2021', dateFormat)]}
format={dateFormat}style={{width:250,marginLeft:100}}/>


let iconExit=<FontAwesomeIcon icon={faSignOutAlt}/>;
let iconImages=<FontAwesomeIcon icon={faImages}/>;
let iconGrafico=<FontAwesomeIcon icon={faAngleDoubleDown}/>;



let estiloBotonGrafico={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff'}
let estiloBotonExportar={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff',marginLeft:790}
let estiloBotonGaleria={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff',marginLeft:1}
let estiloBotonSalir={width:50,height:50,backgroundColor:'red',borderColor:'#898989',color:'#fff',marginLeft:1}

return (
  
    <div className="table-responsive" style={{width:1500,marginLeft:-125}}>
    <Fragment>      
      <Layout style={{width:1500}}>
        <nav style={{ color: 'white', backgroundColor: '#585858', height: 50, fontSize: 25 }}>  
          <button className='btn' style={estiloBotonGrafico}>{iconGrafico}</button>        
          {calendario}         
          <button className='btn'style={estiloBotonExportar}></button>       
          <button className='btn 'style={estiloBotonGaleria}>{iconImages}</button>
          <button className='btn'style={estiloBotonSalir}>{iconExit}</button>  
        </nav>
        </Layout>
      {calidad.map((props)=>(<Grilla key={props.id} props={props}/>))}        
    </Fragment>
    </div>      
  )
}
export default Container;




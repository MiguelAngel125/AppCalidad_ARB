import React,{useState,useEffect} from 'react';
import Container from '../Tabla_1/Container';
import Grafico from '../componentes/Grafico'
import './navbar.css'
import fire from '../conex/fire';
import db from '../conex/fire';
import { CSVLink} from 'react-csv' ;
import { DatePicker } from '@material-ui/pickers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt,faImages,faAngleDoubleDown,faFileExport, faRedo, faImage} from '@fortawesome/free-solid-svg-icons';
import Modal from '../componentes/Modal';
import VentanaFoto from '../componentes/VentanaFoto';






let iconExit=<FontAwesomeIcon icon={faSignOutAlt}/>;
let iconImages=<FontAwesomeIcon icon={faImages}/>;
let iconGrafico=<FontAwesomeIcon icon={faAngleDoubleDown}/>;
let iconExportar=<FontAwesomeIcon icon={faFileExport}/>;
let iconActualizar=<FontAwesomeIcon icon={faRedo}/>
let iconVerFoto=<FontAwesomeIcon icon={faImage}/>

let estiloBotonGrafico={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:2}
let estiloBotonActualizar={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:'1vw'}
let estiloBotonExportar={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:10,padding:10.5}
let estiloBotonGaleria={width:50,height:50,backgroundColor:'#1C2B36',borderColor:'#1C2B36',color:'#fff',marginLeft:'55vw'}
let estiloBotonSalir={width:45,height:45,backgroundColor:'red',borderColor:'red',color:'#fff',marginLeft:10,marginTop:'0.5vh'}
let estiloBotonFoto={width:35,height:35,backgroundColor:'rgb(5, 114, 76)',borderColor:'##1C2B369',color:'#fff'}


function Navbar() { 
  
  
  const[DBCalidad, setDBCalidad]=useState([]);
  const[mostrar,setMostrar]=useState(false);
  const[fechaDesde,setFechaDesde]=useState(new Date().toDateString())
  const[fechaHasta,setFechaHasta]=useState(new Date().toDateString())
  const[mostrarVentana,setmostrarVentana]=useState(false);
  const[modalAbierto,setmodalAbierto]=useState(false);

  const cerrarSesion=()=>{
    fire.auth().signOut();
  }; 

  const mostrardata=()=>{
    setMostrar(true)
    }

  const abrirModal=()=>{
    setmodalAbierto(true);
    }
  
  const cerrarModal=()=>{
    setmodalAbierto(false);
    }
    
  const abrirVentana=()=>{
    setmostrarVentana(true);
    }

  const cerrarVentana=()=>{
    setmostrarVentana(false);
    }

  useEffect(()=>{     
    db.firestore().collection('dbcalidad')
    .onSnapshot(snap=>{
        const documents =[];
        snap.forEach(doc => {
            documents.push({id:doc.id, ...doc.data()})           
        });
        setDBCalidad(documents);
    })
    })


  let index=0;
  let data = [];
  let index_1 = 0;
  let data_1 = [];

  let T5 = 0;
  let T4 = 0;
  let T3 = 0;
  let T2 = 0;
  let T1 = 0;

  DBCalidad.forEach(item => {
    let t5 = parseInt(item.T5);
    let t4 = parseInt(item.T4);
    let t3 = parseInt(item.T3);
    let t2 = parseInt(item.T2);
    let t1 = parseInt(item.T1);    
    let sumTotal = t5+t4+t3+t2+t1;
    let calidad = ((t5 * 5 + t4 * 4 + t3 * 3 + t2 * 2 + t1) / sumTotal).toFixed(2);   
    let cat1=(((sumTotal-t3-t2-t1)*100)/sumTotal).toFixed(0).toString();
    let cat2=(((sumTotal-t5-t4)*100)/sumTotal).toFixed(0).toString();

    data_1.push({
      key: index_1,
      fecha:item.Fecha,
      productor: item.Nombre,
      finca:item.Finca,
      up:item.UP,
      calibre: item.Calibre,
      destino:item.Destino,
      muestra:item.Muestra,
      t5:item.T5,
      t4:item.T4,
      t3:item.T3,
      t2:item.T2,
      t1:item.T1,
      calidad:calidad,
      porcentaje:cat1 +"/"+ cat2, 
      
    });
    index_1++;

    if(mostrar===true){
      data.push({
        key: index,
        fecha:item.Fecha,
        productor: item.Nombre,
        finca:item.Finca,
        up:item.UP,
        calibre: item.Calibre,
        destino:item.Destino,
        muestra:item.Muestra,
        t5:item.T5,
        t4:item.T4,
        t3:item.T3,
        t2:item.T2,
        t1:item.T1,
        calidad:calidad,
        porcentaje:cat1 +"/"+ cat2,
      });
        index++;  
      }
      else{  
      } 
});


const filterNombre = data.map((x) => {
  let productor = '';
  switch (x.productor) {
    case 'JORGE A. MARTINEZ ZUCCARDI': productor = 'JMZ'; break;
    case 'ERNESTO FERNANDEZ E HIJOS': productor = 'EHF'; break;
    case 'Forestal San Ignacio S.R.L': productor = 'DIB'; break;
    case 'Sucesores de SALOMON JALIL s.r.l.': productor = 'JLI'; break;
    case 'Ledesma S.A.A.I.': productor = 'LED'; break;
    default:
      productor = x.productor;     
  }
 return (
  {text:productor,value: x.productor,}
 );
});

const filterFinca = data.map((x) => { 
let finca = '';
finca=x.finca;
 return (
  {text:finca,value: x.finca,}
  );
});

const filterUP = data.map((x) => { 
  let up= '';
  up=x.up;
   return (
    {text:up,value: x.up,}
    );
});

const filterCalibre = data.map((x) => { 
  let calibre= '';
  calibre=x.calibre;
   return (
    {text:calibre,value: x.calibre,}
    );
  });



data.forEach((item) => {
  T5 += parseInt(item.t5);
});
let resumenT5 = T5/data.length ;

data.forEach((item) => {
  T4 += parseInt(item.t4);
});
let resumenT4 = T4/data.length ;


data.forEach((item) => {
  T3 += parseInt(item.t3);
});
let resumenT3 = T3/data.length ;


data.forEach((item) => {
  T2 += parseInt(item.t2);
});
let resumenT2 = T2/data.length ;

data.forEach((item) => {
  T1 += parseInt(item.t1);
});
let resumenT1 = T1/data.length ;

let suma=(T5+T4+T3+T2+T1);
let promCalidad=((T5 * 5 + T4 * 4 + T3 * 3 + T2 * 2 + T1)/suma).toFixed(2)
let promCat1=(((suma-T3-T2-T1)*100)/suma).toFixed(0).toString();
let promcat2=(((suma-T5-T4)*100)/suma).toFixed(0).toString();

const columns = [ 
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    width: '7%',
    defaultSortOrder: 'descend',                
  },
  {
    title: 'Productor',
    dataIndex: 'productor',
    width: '20%',
    
    filters: filterNombre,
    onFilter: (value, record) => record.productor.indexOf(value) === 0,

    sorter: (a, b) => a.productor.length - b.productor.length,   
    footer:true 
  },  
  {
    title: 'Finca',
    dataIndex: 'finca',
    width: '8%',
    filters:filterFinca,
    onFilter: (value, record) => record.finca.indexOf(value)===0,    
    sorter: (a, b) => a.Finca - b.Finca,   
  },
  {
    title: 'UP',
    dataIndex: 'up',
    width: '8%',    
    defaultSortOrder: 'descend',
    filters:filterUP,
    onFilter: (value, record) => record.up.indexOf(value)===0,
    sorter: (a, b) => a.UP - b.UP,          
  },
  {
    title: 'Calibre',
    dataIndex: 'calibre',
    width: '8%',
    filters: filterCalibre,
    onFilter: (value, record) => record.calibre.indexOf(value) === 0,
  },
  {
    title: 'Destino',
    dataIndex: 'destino',
    width: '8%',
    filters: [
      {text: 'USA',value: 'USA',},
      {text: 'UE',value: 'UE',},
      {text: 'OD',value: 'OD',},      
    ],
    onFilter: (value, record) => record.destino.indexOf(value) === 0,
  },
  {
    title: 'Muestra',
    dataIndex: 'muestra',
    width: '8%',
    filters: [
      {text: 'Cajonera',value: 'Cajonera',},
      {text: 'Bin',value: 'Bin',},
    ],
    onFilter: (value, record) => record.muestra.indexOf(value) === 0,    
  },
  {
    title: 'T5',
    dataIndex: 't5',
    width: '4%',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T4',
    dataIndex: 't4',
    width: '4%',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T3',
    dataIndex: 't3',
    width: '4%',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T2',
    dataIndex: 't2',
    width: '4%',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T1',
    dataIndex: 't1',
    width: '4%',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Calidad',
    dataIndex: 'calidad',
    width: '8%',
    align:'center',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Porcentaje',
    dataIndex: 'porcentaje',
    width: '8%',
    align:'center',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,    
  },
  {
    title:'Foto',
    dataIndex: 'foto',
    width: '5%',
    render:()=><button className="btn" style={estiloBotonFoto} onClick={()=>abrirVentana()}>{iconVerFoto}</button>
  },  
];

  return( 
  <>      
    <div className="table-responsive">

    <nav style={{ color: 'white', backgroundColor: '#1C2B36', height: 55, fontSize: 25, display:'flex', justifyContent:'space-around', flexDirection:'row'  }}>      
    <button className='btn' style={estiloBotonGrafico} /*onClick={()=>abrirGrafico()}*/>{iconGrafico}</button>
      <DatePicker style={{background:'white',height:'5vh',marginTop:'0.5vh',width:'9vw',borderRadius:'5px',padding:'2px'}}
      value={fechaDesde} onChange={setFechaDesde}
      />
      <DatePicker style={{background:'white',height:'5vh',marginTop:'0.5vh',width:'9vw',borderRadius:'5px',padding:'2px'}}
      value={fechaHasta} onChange={setFechaHasta}
      />
      <button className='btn'style={estiloBotonActualizar} onClick={(e) => { if (window.confirm('Hay ' + index_1 + ' Registros. Desea continuar?')) mostrardata() } }>{iconActualizar}</button>            
      <CSVLink data={data} separator={';'} filename={'Calidad.csv'} className='btn' style={estiloBotonExportar} > {iconExportar}  </CSVLink>
      <button className='btn'style={estiloBotonGaleria} onClick={()=>abrirModal()}>{iconImages}</button>
      <button className='btn'style={estiloBotonSalir} onClick={()=>cerrarSesion()}>{iconExit}</button>     
    </nav>






    <Modal 
      Abierto={!modalAbierto}
      cerrarModal={cerrarModal}/>

    <VentanaFoto
      mostrarVentana={!mostrarVentana}
      cerrarVentana={cerrarVentana}/> 

    <Grafico
      t5={resumenT5}
      t4={resumenT4}
      t3={resumenT3}
      t2={resumenT2}
      t1={resumenT1}
      calidad={promCalidad}/>
      
    <Container
      datatest={data}
      t5={resumenT5}
      t4={resumenT4} 
      t3={resumenT3}
      t2={resumenT2}
      t1={resumenT1}
      promCalidad={promCalidad}
      promCat1={promCat1}
      promcat2={promcat2}
      columna={columns}/>
      
    </div>
  </>
  );
};

export default Navbar;


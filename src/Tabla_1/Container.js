import React,{useState,useEffect,Fragment} from 'react';
import db from '../conex/fire';
import {Table,DatePicker} from 'antd';
import { Layout } from 'antd';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt,faImages,faAngleDoubleDown,faFileExport, faRedo, faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import 'antd/dist/antd.css';
import Galeria from './Galeria';

import fire from '../conex/fire';



const cerrarSesion=()=>{
  fire.auth().signOut();
};



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
let iconExportar=<FontAwesomeIcon icon={faFileExport}/>;
let iconActualizar=<FontAwesomeIcon icon={faRedo}/>
let iconVerFoto=<FontAwesomeIcon icon={faAngleLeft}/>


let estiloBotonGrafico={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff'}
let estiloBotonActualizar={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff',marginLeft:10}
let estiloBotonExportar={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff',marginLeft:10}
let estiloBotonGaleria={width:50,height:50,backgroundColor:'#585858',borderColor:'#898989',color:'#fff',marginLeft:10}
let estiloBotonSalir={width:50,height:50,backgroundColor:'red',borderColor:'#898989',color:'#fff',marginLeft:10}
let estiloBotonFoto={width:35,height:35,backgroundColor:'#585858',borderColor:'#898989',color:'#fff'}

const {Content } = Layout; 


let index = 0;
let data = [];


calidad.forEach(item => {
    let t5 = parseInt(item.T5);
    let t4 = parseInt(item.T4);
    let t3 = parseInt(item.T3);
    let t2 = parseInt(item.T2);
    let t1 = parseInt(item.T1);
    let sumTotal = 20;
    let calidad = ((t5 * 5 + t4 * 4 + t3 * 3 + t2 * 2 + t1) / sumTotal).toFixed(2);   
    let cat1=(((sumTotal-t3-t2-t1)*100)/sumTotal).toFixed(0).toString();
    let cat2=(((sumTotal-t5-t4)*100)/sumTotal).toFixed(0).toString();

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
    url:item.URL,
  });
  index++;
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
  /*text: productor,value: 'Nombre'*/);
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



/////////////////////////////
const photo=data.map((x)=>{
  let url='';
  url=x.url
  return (url)
})
////////////////////////////






let T5 = 0;
data.forEach((item) => {
  T5 += parseInt(item.t5);
});
let resumenT5 = T5 ;

let T4 = 0;
data.forEach((item) => {
  T4 += parseInt(item.t4);
});
let resumenT4 = T4 ;

let T3 = 0;
data.forEach((item) => {
  T3 += parseInt(item.t3);
});
let resumenT3 = T3 ;

let T2 = 0;
data.forEach((item) => {
  T2 += parseInt(item.t2);
});
let resumenT2 = T2 ;

let T1 = 0;
data.forEach((item) => {
  T1 += parseInt(item.t1);
});
let resumenT1 = T1 ;

const columns = [
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    width: 100,
    defaultSortOrder: 'descend',                
  },
  {
    title: 'Productor',
    dataIndex: 'productor',
    width: 250,
    filters: filterNombre,
    onFilter: (value, record) => record.productor.indexOf(value) === 0,

    sorter: (a, b) => a.productor.length - b.productor.length,    
  },  
  {
    title: 'Finca',
    dataIndex: 'finca',
    width: 85,
    filters:filterFinca,
    onFilter: (value, record) => record.finca.indexOf(value)===0,    
    sorter: (a, b) => a.Finca - b.Finca,   
  },
  {
    title: 'UP',
    dataIndex: 'up',
    width: 100,    
    defaultSortOrder: 'descend',
    filters:filterUP,
    onFilter: (value, record) => record.up.indexOf(value)===0,
    sorter: (a, b) => a.UP - b.UP,          
  },
  {
    title: 'Calibre',
    dataIndex: 'calibre',
    width: 90,
    filters: filterCalibre,
    onFilter: (value, record) => record.calibre.indexOf(value) === 0,
  },
  {
    title: 'Destino',
    dataIndex: 'destino',
    width: 85,
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
    width: 90,
    filters: [
      {text: 'Cajonera',value: 'Cajonera',},
      {text: 'Bin',value: 'Bin',},
    ],
    onFilter: (value, record) => record.muestra.indexOf(value) === 0,    
  },
  {
    title: 'T5',
    dataIndex: 't5',
    width: 50,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T4',
    dataIndex: 't4',
    width: 50,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T3',
    dataIndex: 't3',
    width: 50,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T2',
    dataIndex: 't2',
    width: 50,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'T1',
    dataIndex: 't1',
    width: 50,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Calidad',
    dataIndex: 'calidad',
    width: 100,
    align:'center',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Porcentaje',
    dataIndex: 'porcentaje',
    width: 100,
    align:'center',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,    
  },
  {
    title:'Foto',
    dataIndex: 'foto',
    width: 50,
    render:()=><button className="btn" style={estiloBotonFoto} >{iconVerFoto}</button>






  },  
];

function onChange(pagination, filters, sorter, extra) {
  console.log('parametros', pagination,filters, sorter, extra);
}

return (  
<Fragment>
  <Layout>
    <nav style={{ color: 'white', backgroundColor: '#585858', height: 54, fontSize: 25 }}>  
      <button className='btn' style={estiloBotonGrafico}>{iconGrafico}</button>        
      {calendario}         
      <button className='btn'style={estiloBotonActualizar}>{iconActualizar}</button> 
      <button className='btn'style={estiloBotonExportar}>{iconExportar}</button> 

      <button className='btn'style={estiloBotonGaleria} >{iconImages}</button>

      <button className='btn'style={estiloBotonSalir} onClick={()=>cerrarSesion()}>{iconExit}</button>    
    </nav>

    <div className="table-responsive" style={{ backgroundColor: '#707050',color:"white"}}>
    <tr>
        <td style={{width:155}}></td>
        <td style={{width:365}}>{'filterR'}</td>
        <td style={{width:125}}>{'Finca'}</td>
        <td style={{width:145}}>{'UP'}</td>
        <td style={{width:135}}>{'Calibre'}</td>
        <td style={{width:125}}>{'Destino'}</td>
        <td style={{width:130}}>{'Muestra'}</td>
        <td style={{width:75}}>{resumenT5/data.length}</td>
        <td style={{width:75}}>{resumenT4/data.length}</td>
        <td style={{width:70}}>{resumenT3/data.length}</td>
        <td style={{width:70}}>{resumenT2/data.length}</td>
        <td style={{width:115}}>{resumenT1/data.length}</td>
        <td style={{width:135}}>{'calidad'}</td>
        <td style={{width:100}}>{'cat1'}/{'cat2'}</td>
      </tr>
     </div>
     
    <Content>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
        size="small"
        scroll={{ y: 900}}
        />
    </Content>
    <h2>
      
    

</h2>
  </Layout>  

  
  
</Fragment>      
       
  )
}
export default Container  ;




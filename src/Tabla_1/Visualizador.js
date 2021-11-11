import React,{useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../Tabla_1/visualizador.css';
/*
import imagen1 from 'C:/Users/desar/loginc/src/imgs/1.jpg';
import imagen2 from 'C:/Users/desar/loginc/src/imgs/2.jpg';
import imagen3 from  'C:/Users/desar/loginc/src/imgs/3.jpg';
import imagen4 from  'C:/Users/desar/loginc/src/imgs/4.jpg';
import imagen5 from  'C:/Users/desar/loginc/src/imgs/5.jpg';
import imagen6 from  'C:/Users/desar/loginc/src/imgs/6.jpg';
import imagen7 from  'C:/Users/desar/loginc/src/imgs/7.jpg';
import imagen8 from  'C:/Users/desar/loginc/src/imgs/8.jpg';
import imagen9 from  'C:/Users/desar/loginc/src/imgs/9.jpg';
import imagen10 from  'C:/Users/desar/loginc/src/imgs/10.jpg';
import imagen11 from  'C:/Users/desar/loginc/src/imgs/11.jpg';
import imagen12 from  'C:/Users/desar/loginc/src/imgs/12.jpg';
import imagen13 from  'C:/Users/desar/loginc/src/imgs/13.jpg';
*/

import imagen1 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/1.jpg';
import imagen2 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/2.jpg';
import imagen3 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/3.jpg';
import imagen4 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/4.jpg';
import imagen5 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/5.jpg';
import imagen6 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/6.jpg';
import imagen7 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/7.jpg';
import imagen8 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/8.jpg';
import imagen9 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/9.jpg';
import imagen10 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/10.jpg';
import imagen11 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/11.jpg';
import imagen12 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/12.jpg';
import imagen13 from 'C:/Users/macan/Desktop/respositorio calidad/AppCalidad_ARB/src/imgs/13.jpg';





let estiloBotonSalir={width:50,height:50,color: "white"};
let estiloBotonEliminar={width:50,height:50,backgroundColor:'black',color:'#fff',marginTop:600}
let estiloBotonRotarRight={width:70,height:70,backgroundColor:'black',color:'#fff',margin:5,marginTop:-30}




const Visualizador=() =>{
  let data=[
    {id:1,imgSrc:imagen1},
    {id:2,imgSrc:imagen2},
    {id:3,imgSrc:imagen3},
    {id:4,imgSrc:imagen4},
    {id:5,imgSrc:imagen5},
    {id:6,imgSrc:imagen6},
    {id:7,imgSrc:imagen7},
    {id:8,imgSrc:imagen8},
    {id:9,imgSrc:imagen9},
    {id:10,imgSrc:imagen10},
    {id:11,imgSrc:imagen11},
    {id:12,imgSrc:imagen12},
    {id:13,imgSrc:imagen13},
  ]

  const[model,setModel]=useState(false);
  const [temimgSrc,setTemImgSrc]=useState('');

  const getImg=(imgSrc)=>{
  setTemImgSrc(imgSrc);
  setModel(true);    
  }
  
  const [rotar,setRotar]=useState(0);  

  return( 
    <>
      <div className={model ? "model-open" : "model"}>       

        <CloseIcon style={estiloBotonSalir} onClick={()=>setModel(false)}/>     

            <div className={
             rotar===0? "rotar" 
            :rotar===1? "rotar2"
            :rotar===2? "rotar3" 
            :rotar===3? "rotar4"            
            :""}>






              <div className="zoom">
              <img src={temimgSrc} alt=''/>
              </div>

            </div>

            <div className='d-grid gap-2 res' style={{position:'absolute'}}>              
              
              <button className='btn' style={estiloBotonRotarRight} onClick={()=>setRotar(0)}>0°</button>
              <br/>
              <button className='btn' style={estiloBotonRotarRight} onClick={()=>setRotar(1)}> 90°</button>
              <br/>
              <button className='btn' style={estiloBotonRotarRight} onClick={()=>setRotar(2)}> 180°</button>
              <br/>
              <button className='btn' style={estiloBotonRotarRight} onClick={()=>setRotar(3)}> 270°</button>
              <br/>
              <DeleteForeverIcon className='btn'style={estiloBotonEliminar} />
              <br/>             
            </div>  

            
                    
      </div>
       
          <div className="gallery"> 

           {data.map((item,index)=>{
              return (
                <div className="pics"  key={index} onClick={()=>getImg(item.imgSrc)} >

                  <img src={item.imgSrc} alt='' style={{width:'100%',height:'100%'}} 
                  title='
                  UP: TU-0400-005
                  Productor: JORGE A. MARTINEZ ZUCCARDI 
                  Muestra: Cajonera' 
                   /> 

                 </div>
                    )}
            )}           
          </div> 
    </>
  );
};

export default Visualizador;


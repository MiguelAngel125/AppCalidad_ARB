import React,{useState} from 'react';

import CloseIcon from '@material-ui/icons/Close';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

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

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';



import '../Tabla_1/grafico.css';






let estiloBotonRotarLeft={width:50,height:50,backgroundColor:'black',borderColor:'#898989',color:'#fff',marginTop:650,marginRight:300}
let estiloBotonRotarright={width:50,height:50,backgroundColor:'black',borderColor:'#898989',color:'#fff',marginTop:650,marginRight:1500}


const Grafico=() =>{


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

  //console.warn(imgSrc);
  console.log(model)
  }


  


  return( 
    <>
      <div className={model ? "model-open" : "model"}>
        <img src={temimgSrc} alt=''/>
        <CloseIcon style={{color: "white"}} onClick={()=>setModel(false)}/>


      <RotateRightIcon className='btn'style={estiloBotonRotarright} />

      <RotateLeftIcon className='btn'style={estiloBotonRotarLeft}/>


      </div>

      <div className="gallery"> 
          {data.map((item,index)=>{
            return (
                <div className="pics"  key={index} onClick={()=>getImg(item.imgSrc)} >
                  <img src={item.imgSrc} alt='' style={{width:'100%',height:'100%'}}/>
                 </div>
                    )
                    }
            )}
        </div>
 
     </>
  );
};

export default Grafico;


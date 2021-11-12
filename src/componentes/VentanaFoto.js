import React,{useState} from 'react'
import './ventanaFoto.css';
import CloseIcon from '@material-ui/icons/Close';
import imagen4 from  'C:/Users/desar/loginc/src/imgs/4.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { FiRotateCcw } from "react-icons/fi";
import { FiRotateCw } from "react-icons/fi";
import '../Tabla_1/visualizador.css';



let estiloBotonSalir={width:50,height:50,color: "white"};
let estiloBotonEliminar={width:60,height:60,backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff',marginRight:-5,position:'absolute',display:'grid',marginTop:50}
let estiloBotonRotar={width:60,height:60,backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff',marginRight:-100,position:'absolute',display:'grid',marginTop:200}
let estiloBotonRotar2={width:60,height:60,backgroundColor:'rgba(0, 0, 0, 0)',color:'#fff',marginRight:820,position:'absolute',display:'flex',marginTop:200}









const VentanaFoto = ({mostrarVentana,cerrarVentana}) => {

    const [count, setCount] = useState(0);
    let grados=count;
    let grade={transform:"rotate("+grados+"deg)" ,transition: "all 950ms ease"}
    let imagen={width:'100%',height:'100%',transform:"rotate("+grados+"deg)"}
   

    
    return (
        <>
      <div className={!mostrarVentana ? "model-open" : "model"}>       

        <CloseIcon style={estiloBotonSalir} onClick={()=>cerrarVentana()}/>     
        <DeleteForeverIcon style={estiloBotonEliminar} />
              <div className="zoom" >                    
                      <img src={imagen4} alt=''  style={imagen} />                      
              </div>

            <div className='res'>
            <FiRotateCw onClick={() => setCount(count + 90)} style={estiloBotonRotar2}/>              
            <FiRotateCcw onClick={() => setCount(count - 90)} style={estiloBotonRotar}/>          
            </div>           
                    
        </div>
       
          
           
            )          
        
    </>
    )
}

export default VentanaFoto

import React from 'react'
import './ventanaFoto.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import CloseIcon from '@material-ui/icons/Close';


import imagen3 from  'C:/Users/desar/loginc/src/imgs/3.jpg';





let estiloBotonSalir={width:50,height:50,color: "white"};



const VentanaFoto = ({mostrarVentana,cerrarVentana}) => {

    
    
  
    






    
    return (
        <div className={mostrarVentana? "model" : "model-open"}>
            <CloseIcon style={estiloBotonSalir} onClick={()=>cerrarVentana()}/>
            
            <div className= "zoom">
                    
                    <div>
                        <img src={imagen3} alt='' style={{width:'100%',height:'100%'}} 
                  title='
                  UP: TU-0400-005
                  Productor: JORGE A. MARTINEZ ZUCCARDI 
                  Muestra: Cajonera' 
                   /> 
                    </div>
                    </div>
                     
                     
           
        </div>
    )
}

export default VentanaFoto

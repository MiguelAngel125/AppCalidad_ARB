import React from 'react'
import {Line} from 'react-chartjs-2';
import './grafico.css';
import CloseIcon from '@material-ui/icons/Close';









let estiloBotonSalir={width:45,height:45,color: "white",backgroundColor:'red',marginLeft:'88vw',marginTop:'-5vh'};
let estilo={width:'100px',backgroundColor:'rgb(5, 114, 76)',color:'white',marginBottom:'93vh',marginLeft:'2vw'}


const Grafico=({t5,t4,t3,t2,t1,calidad,mostrarGrafico,cerrarGrafico})=>{

    const datapoints = [5, 3.8, 4.05, 4, 3.9,4.5, 3.8];


    
      
      


    return(
        <>
        
        <div className={!mostrarGrafico ? "grafico-open" : "grafico"}>
            <button className='btn' style={estilo}>Grafico</button>
            <div className='grafico_dialog'>
                
                <CloseIcon className='btn' style={estiloBotonSalir} onClick={()=>cerrarGrafico()}/>
   

                <div className='table-responsive' style={{backgroundColor:'#1C2B36',width:'60vw',height:'70vh',position:'relative',marginLeft:'15vw'}}>  

<Line

data={{ 
    labels:['Enero','Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],                    
        datasets: [
            {
            label: 'Calidad Promedio',
            data: datapoints,
            borderColor: '#6441A5',
            fill: {value: 25},
            tension: 0.4, 
            pointBackgroundColor:'yellow',
            pointStyle:'circle',
            hitRadius:20,
            hoverRadius:5,
            intersect:true,
            displayColors:true,  
            event:['click', 'mouseover', 'mouse']                      
                                              
            },
            
            
            
        ]
        
        
    }}
    

/>





                
                
                
                </div>

            </div>
        
        </div>

        </>
    )
}

export default Grafico
import React from 'react'
import {Line} from 'react-chartjs-2';
import './grafico.css';






const Grafico=({t5,t4,t3,t2,t1,calidad,mostrarGrafico,cerrarGrafico})=>{

    const datapoints = [calidad,4.2,4.1,4.06,3.8,calidad,4,4.1,4.06,3.7,4,4.05];
    return(
    <>    
        <div>            
            <div className='table-responsive' style={{backgroundColor:'grey', display:'flex',justifyContent: 'space-around'}} >                
          
        <div className='table-responsive' style={{backgroundColor:'#1C2B36',width:'50vw',height:'60vh',position:'relative',marginLeft:'6vw',marginTop:'1vh',marginBottom:'1vh'}}>  
<Line
data={{ 
    labels:['Enero','Febrero', 'Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],                    
        datasets: [
            {
            label: 'Calidad Promedio',
            data: datapoints,
            borderColor: '#6441A5',
            fill: {value: 2},
            tension: 0.4, 
            pointBackgroundColor:'yellow',
            pointStyle:'circle',                                      
            },        
        ]        
    }}/>               
                
                
                </div>

            </div>
        
        </div>

        </>
    )
}

export default Grafico
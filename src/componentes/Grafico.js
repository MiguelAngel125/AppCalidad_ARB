
import React from 'react'

import {Line} from 'react-chartjs-2';

const Grafico=({t5,t4,t3,t2,t1,calidad})=>{

    



    const datapoints = [4.1, 3.8, 4.05, 4, 3.9, 4.15, 4.2, 4.1, 4.2, 3.8, 3.9, 3.9, 3.8];
//#1C2B36
//rgb(28,43,54)
    return(
        <div className='table-responsive' style={{backgroundColor:'#1C2B36',width:'900px',height:'500px'}}>
            
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
                    displayColors:true
                    
                                    
                     }, 
                    ]
                    
                }}
            />
        </div>
    )
}

export default Grafico
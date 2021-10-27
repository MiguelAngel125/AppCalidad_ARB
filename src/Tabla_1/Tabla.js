import React,{Fragment} from 'react';
import { Table} from 'antd';
 
export const Grilla = ({ props}) => {
    const { id, Nombre, UP , Calibre,Destino,T5,T4,T3,T2,T1}=props;






    const fecha = new Date().toLocaleDateString();   

    let t5 = parseInt(T5);
    let t4 = parseInt(T4);
    let t3 = parseInt(T3);
    let t2 = parseInt(T2);
    let t1 = parseInt(T1);

    let sumTotal = 20;

    let calidad = ((t5 * 5 + t4 * 4 + t3 * 3 + t2 * 2 + t1) / sumTotal).toFixed(2);   
    let cat1=(((sumTotal-t3-t2-t1)*100)/sumTotal).toFixed(0);
    let cat2=(((sumTotal-t5-t4)*100)/sumTotal).toFixed(0);   


    const EHF=Nombre 

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
        filters: [     
          {text: EHF,value: Nombre,},      
          {text: 'EHF',value: 'Nombre,'},   
        ],
        onFilter: (value, record) => record.productor.indexOf(value) === 0,
        sorter: (a, b) => a.productor.length - b.productor.length,    
      },  
      {
        title: 'Finca',
        dataIndex: 'finca',
        width: 85,
        filters: [
          {
            text: 'TU-0400',
            value: 'TU-0400',
          },
         
          {
            text: 'TU-0285',
            value: 'TU-0285',
          },
        ],
        onFilter: (value, record) => record.finca.indexOf(value)===0,
      },
      {
        title: 'UP',
        dataIndex: 'up',
        width: 100,    
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.UP - b.UP,          
      },
      {
        title: 'Calibre',
        dataIndex: 'calibre',
        width: 90,
        filters: [
          {
            text: '140/00',
            value: '140/00',
          },
          {
            text: '115/00',
            value: '115/00',
          },
        ],
        onFilter: (value, record) => record.calibre.indexOf(value) === 0,
      },
      {
        title: 'Destino',
        dataIndex: 'destino',
        width: 85,
        filters: [
          {
            text: Destino,
            value: Destino,
          },
          
        ],
        onFilter: (value, record) => record.destino.indexOf(value) === 0,
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
        render:()=><button>foto</button>
      }
    ];


    const data = [
      {
        key: '1',
        fecha:fecha,
        productor: Nombre,
        finca:'TU-0400',
        up:UP,
        calibre: Calibre,
        destino:Destino,
        t5:t5,
        t4:t4,
        t3:t3,
        t2:t2,
        t1:t1,
        calidad:calidad,
        porcentaje:cat1,     
      },     
    ];
  





    return (


     
        <Fragment></Fragment>
            
        
    )
}
export default Grilla;




                        
            

                   



    

              
    
                     


                    
                      


               
    


         
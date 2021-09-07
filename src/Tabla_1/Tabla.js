import React from 'react';
import 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Tabla_1/Tabla.css";

const Tabla=() =>{
  return(
        <div id="wrapper">    
        <table className="table table-striped">
          <thead>
            <tr>
              <th><span>Fecha</span></th>
              <th><span>Productor</span></th>
              <th><span>UP</span></th>
              <th><span>Calibre</span></th>
              <th><span>Destino</span></th>
              <th><span>T5</span></th>
              <th><span>T4</span></th>
              <th><span>T3</span></th>
              <th><span>T2</span></th>
              <th><span>T1</span></th>
              <th><span>Calidad</span></th>
              <th><span>Foto</span></th>   
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="lalign">10/08/2021</td>
              <td>nn</td>
              <td>110</td>
              <td>113</td>
              <td>USA</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>1</td>
              <td>1</td>
              <td>Q: 4.075/25</td>
              <td><button class="btn btn-primary">F</button></td>       
              </tr>
              <tr>
              <td class="lalign">10/08/2021</td>
              <td>nn</td>
              <td>110</td>
              <td>113</td>
              <td>USA</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>1</td>
              <td>1</td>
              <td>Q: 4.075/25</td>
              <td><button class="btn btn-primary">F</button></td>       
              </tr>            
          </tbody>
        </table>
       </div> 
  );
};
      
export default Tabla;
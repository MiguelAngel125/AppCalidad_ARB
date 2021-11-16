import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.css';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/esm/locale/es/index.js';







ReactDOM.render(
  
  <React.StrictMode> 
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>  
    <App/>    
    </MuiPickersUtilsProvider>
  </React.StrictMode> 
  ,
  document.getElementById('root')
);


export default App;

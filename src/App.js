import React,{useState,useEffect} from "react";
import "./App.css";
import fire from './conex/fire';
import Login from './Login';
import Navbar from "./navbar/navbar";

const App =()=>{
  const[usuario,configUsuario]=useState('');
  const[email,configEmail]=useState('');
  const[password,configPassword]=useState('');
  const[emailError,configEmailError]=useState('');
  const[passwordError,configPasswordError]=useState('');
  

  const borrarInputs=()=>{
    configEmail('');
    configPassword('');    
  }

  const eliminarErrores=()=>{
    configEmailError('');
    configPasswordError('');
  }
  
  const ejecutarLogin=()=>{
    eliminarErrores();
    borrarInputs();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{

        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            configEmailError('El usuario no existe');
          break;
          case "auth/wrong-password":
            configPasswordError('Contraseña incorrecta');
          break;
          // no default
        }  
          });
  };

const cerrarSesion=()=>{
  fire.auth().signOut();
};

const authListener=()=>{
  fire.auth().onAuthStateChanged(usuario1=>{
    if(usuario1){
      borrarInputs();
      configUsuario(usuario1);
    } else {
      configUsuario('');
    }
  })
}

useEffect(()=>{
  authListener();
},/*[]*/);

  return (
    <div className="App">
      {usuario?(
        <Navbar cerrarSesion={cerrarSesion} className="tabla"/>
      ):(
        <Login 
          email={email} 
          configEmail={configEmail} 
          password={password} 
          configPassword={configPassword}
          ejecutarLogin={ejecutarLogin}         
          emailError={emailError}
          passwordError={passwordError}
          
        />
      )}    
  </div>
  );  
};

export default App;
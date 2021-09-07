import React,{useState,useEffect} from "react";
import "./App.css";
import fire from './conex/fire';
import Login from './Login';
import Narbar from "./navbar/navbar";

const App =()=>{
  const[usuario,configUsuario]=useState('');
  const[email,configEmail]=useState('');
  const[password,configPassword]=useState('');
  const[emailError,configEmailError]=useState('');
  const[passwordError,configPasswordError]=useState('');
  const[cuenta,confiCuenta]=useState(true);

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
 
const ejecutarRegistro=()=>{
  eliminarErrores();
  borrarInputs();
  fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .catch((err)=>{

      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        
          configEmailError('Usuario invalido o en uso');
          
        break;
        case "auth/weak-password":
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
        <Narbar cerrarSesion={cerrarSesion} className="tabla"/>
      ):(
        <Login 
          email={email} 
          configEmail={configEmail} 
          password={password} 
          configPassword={configPassword}
          ejecutarLogin={ejecutarLogin}
          ejecutarRegistro={ejecutarRegistro}
          cuenta={cuenta}
          confiCuenta={confiCuenta}
          emailError={emailError}
          passwordError={passwordError}
          
        />
      )}    
  </div>
  );  
};

export default App;
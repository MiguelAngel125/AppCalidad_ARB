import React from 'react';

const  Login =(props)=>{
    const{
        email,
        configEmail,
        password,
        configPassword,
        ejecutarLogin,     
        emailError,
        passwordError,
  
    }=props;

    return (        
        <section className="login">
            <div className="loginContainer">
                <h1>Login Calidad</h1>
                <label>Usuario</label>
                <input type="text"
                autoFocus
                required
                value={email}
                onChange={(e)=> configEmail(e.target.value)}
                placeholder="Usuario" />
                <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input type="password"
                autoFocus
                required
                value={password}
                onChange={(e)=> configPassword(e.target.value)}
                placeholder="Contraseña" />
                <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">                    
                        <button onClick={ejecutarLogin} className="btn btn-success btn-lg btn-block position-relative  start-50 translate-middle">Iniciar Sesion</button>                       
                    </div>
            </div>
        </section>
    );
};

export default Login;
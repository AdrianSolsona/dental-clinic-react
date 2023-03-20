import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/Navbar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import "../profile/Profile.css"
import { Button } from "react-bootstrap";

export const Profile = () => {
  //Importo la parte de Redux correspondiente a las credenciales de usuario, en modo lectura
  const credentialsRdx = useSelector(userData);

  //Instancio el método useNavigate en la constante navigate para poder moverme
  let navigate = useNavigate();

  useEffect(() => {
    //Este useEffect equivale a componentDidMount() en los componentes de clase, es el primero
    //en ejecutarse..., es el que tiene unos corchetes de array vacios como argumento

    if (!credentialsRdx.credentials.token) {
      //No token...home redirect
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavBar/>
      <div className="user-data">
        <div className="data-all">Datos de usuario
          <hr />
          <div className="phase-data">
            <p>hola que tal</p>
            <p>como estas</p>
            <p>todo bien gracias</p>
            <p>todo perfecto</p>
            <p>y yo que me alegro</p>
            <p>vale ok todo ok</p>
          </div>
          <div className="btn-container">
            <Button className='btn-login btn-2' variant="primary" type="submit">Modificar datos</Button>
          </div>
        </div>
        <div className="data-all">Cita para tratamiento dental
          <hr />
          <div className="phase-data">
            <p>hola que tal</p>
            <p>como estas</p>
            <p>todo bien gracias</p>
            <p>todo perfecto</p>
            <p>y yo que me alegro</p>
            <p>vale ok todo ok</p>
          </div>
            <div className="all-btn">
              <div className="btn-container">
                <Button className='btn-login' variant="primary" type="submit">Cita Nueva</Button>
              </div>
              <div className="btn-container">
                <Button className='btn-login btn-2' variant="primary" type="submit">Cambiar datos</Button>
              </div>
            </div>
        </div>  
      </div>
        
      <Footer/>
    </>
  );
};
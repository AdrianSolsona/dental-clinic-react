
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./Navbar.css"
import { Navigator } from '../Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../../layout/userSlice';
import {useEffect} from "react";

export const NavBar = () => {

    const datosCredencialesRedux = useSelector(userData);

    const navigate = useNavigate();

    useEffect(()=>{
        
    })

  

    return (
            <Navbar className='all-nav'>
              <div className='row-nav'>
                <div className='factordent'>
                  <div className='link-title'>FACTORDENT</div>
                </div>
                <div className="">
                  {datosCredencialesRedux.credentials.token ? (
                    <div>
                      <div>{datosCredencialesRedux?.credentials?.usuario?.name}</div>
                      <div>logout</div>
                      <div onClick={()=>navigate("/users")}>users</div>
                    </div>
                  ) : (
                    <div className='nav-init'>
                      <Navigator ruta={"Inicio"} destino={"/home"} />
                      <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                      <Navigator ruta={"Registro"} destino={"/register"} />
                      <Navigator ruta={"Inicio sesion"} destino={"/login"} />
                    </div>
                  )}
                </div>  
              </div>
            </Navbar>
          );
};


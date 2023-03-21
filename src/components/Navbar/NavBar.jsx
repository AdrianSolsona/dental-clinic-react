
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import "./Navbar.css"
import { Navigator } from '../Navigator/Navigator';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData, userout } from '../../layout/userSlice';
import { useDispatch } from 'react-redux';
import {useEffect} from "react";

export const NavBar = () => {

    const dispatch = useDispatch()

    const datosCredencialesRedux = useSelector(userData);

    const logoutFunction = () => {
      dispatch(userout({credentials: {}, token: ""}))
      
    }

    const navigate = useNavigate();

    useEffect(()=>{
        
    })

    return (
            <Navbar className='all-nav'>
              <div className='row-nav'>
                <div className='factordent'>
                  <div className='link-title'>FACTORDENT</div>
                </div>
                {!datosCredencialesRedux?.credentials?.decodificado?.rolId ? (
                <> 
                  <div className='nav-init'>
                      <Navigator ruta={"Inicio"} destino={"/home"} />
                      <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                      <Navigator ruta={"Registro"} destino={"/register"} />
                      <Navigator ruta={"Inicio sesion"} destino={"/login"} />
                  </div>  
                </>  
                ) :
                datosCredencialesRedux?.credentials?.decodificado?.rolId === 1 ? (
                <> 
                  <div className='nav-init'>
                      <div onClick={()=>navigate("/users")}>users</div>
                      <div onClick={()=>navigate("/change")}>tipo acceso</div>
                      <div onClick={()=>navigate("/detail")}>detalles</div>
                      <div>{datosCredencialesRedux?.credentials?.decodificado?.username}</div>
                      <div onClick={() => {  navigate("/logout"); logoutFunction();}}>logout</div>
                  </div>  
                </>       
    
                ) : datosCredencialesRedux?.credentials?.decodificado?.rolId === 2 ? (
                <>
                  <div className='nav-init'>
                      <Navigator ruta={"Inicio"} destino={"/home"} />
                      <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                      <div onClick={()=>navigate("/appointments")}>citas pacientes</div>
                      <div>{datosCredencialesRedux?.credentials?.decodificado?.username}</div>
                      <div onClick={() => {  navigate("/login"); logoutFunction();}}>Cerrar sesión</div>
                  </div>
                </>
                ) :datosCredencialesRedux?.credentials?.decodificado?.rolId === 3 ? (
                  <>
                  <div className='nav-init'>
                      <Navigator ruta={"Inicio"} destino={"/home"} />
                      <Navigator ruta={"Tratamientos"} destino={"/treatments"} />
                      <div onClick={()=>navigate("/appointments/book")}>citas</div>
                      <div>{datosCredencialesRedux?.credentials?.decodificado?.username}</div>
                      <div onClick={()=>navigate("/createAppointments")}>crear cita</div>
                      <div onClick={() => {  navigate("/login"); logoutFunction();}}>Cerrar sesión</div>
                  </div>
                </>
                ) : (
                  <div className='nav-init'>
                    <>
                    <Navigator ruta={"Registro"} destino={"/register"} />
                    <Navigator ruta={"Inicio sesion"} destino={"/login"} />
                    </>
                  </div>
                )}   
                </div>  
          </Navbar>  
          );
};


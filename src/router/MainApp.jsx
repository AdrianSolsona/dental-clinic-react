/*
import { createBrowserRouter} from "react-router-dom";
import { Home } from "../layout/home/Home";
import { Login } from "../layout/login/Login";
import { Register } from "../layout/register/Register";

export const rutas = createBrowserRouter([
    {
    path: "/home",
    element: 
        <Home/>,
    },
    {
    path: "/register",
    element: 
        <Register/>,
    },
    {
    path: "/login",
    element: 
        <Login/>,
    }
]);
*/
import React from 'react'
import { NavBar } from '../components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../layout/home/Home'
import { Login } from '../layout/login/login'
import { Register } from '../layout/register/Register'



export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}
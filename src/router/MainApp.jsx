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
import { Route, Routes } from 'react-router-dom'
import { Home } from '../layout/home/Home'
import { Login } from '../layout/login/Login'
import { Register } from '../layout/register/Register'
import { Contact } from '../layout/contact/contact'
import { Treatment } from '../layout/Treatments/Treatments'
import { Profile} from '../layout/profile/Profile'
import { Users } from '../layout/users/Users'
import { Detail} from '../layout/detail/Detail'




export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/treatments' element={<Treatment/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/detail" element={<Detail/>}/>
    </Routes>
    </>
  )
}
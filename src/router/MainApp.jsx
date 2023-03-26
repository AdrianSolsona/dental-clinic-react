import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../layout/home/Home'
import { Login } from '../layout/login/Login'
import { Register } from '../layout/register/Register'
import { Contact } from '../layout/contact/contact'
import { Treatment } from '../layout/Treatments/Treatments'
import { Users } from '../layout/users/Users'
import { Appointment } from '../layout/appointments/appointments'
import { NewAppointmentPage } from '../layout/createAppointment/createAppointment'
import { AppointmentsAsClient } from '../layout/appointmentUser/appointmentUser'
import { ModifyAppointment } from '../layout/modifyAppointment/modifyAppointment'
import { ProfileData} from '../layout/profileData/profileData'
import { ModifyUser } from '../layout/modifyUser/modifyUser'
import { AppointmentsAsDentist } from '../layout/appointmentsDentist/AppointmentsDentist'

export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/treatments' element={<Treatment/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/appointments" element={<Appointment/>}/>
        <Route path="/createAppointments" element={<NewAppointmentPage/>}/>
        <Route path="/appointments/book" element={<AppointmentsAsClient/>}/>
        <Route path="/modify/appointment" element={<ModifyAppointment/>}/>
        <Route path="/data/user" element={<ProfileData/>}/>
        <Route path="/modify/user" element={<ModifyUser/>}/>
        <Route path="/appointments/dentist" element={<AppointmentsAsDentist/>}/>
    </Routes>
    </>
  )
}
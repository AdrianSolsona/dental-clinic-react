/*import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const AppointmentsAsClient = () => {

  const [appointment, setAppointment] = useState([]);

  const credentialsRdx = useSelector(userData)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {

    if(appointment.length === 0){
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result)
  
            setAppointment(result.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[appointment])

  // const selected = (user) => {
    
  //   dispatch(addChoosen({ choosenOject: user}))
  //   console.log({ choosenOject: user})
  //   setTimeout(() => {
  //     navigate('/profile');
  //   }, 500)
  // }



  return (
    <div>AppointmentsAsClient


{ appointment.length > 0 ? 
      (<div className="cardsContainer">
        {
          appointment.map(
            info => {
              return (
          
                  <div
                    className= "userCardDesign"
                    key={info.id}>
                    {info.date}
                  </div>
             
              )
            }
          )

        }  
        </div>)
        
        :

        ( <Spinner animation="border" variant="primary" />)
      
      }
    </div>
  )
}*/

import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../services/apiCalls';
import { addChoosenAppointment } from '../appointmentsSlice';
import { userData } from '../userSlice';
import './appointmentUser.css'

export const AppointmentsAsClient = () => {

  const [appointments, setAppointments] = useState([]);

  const credentialsRdx = useSelector(userData)
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(appointments.length === 0){
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result)
            console.log("hola")
  
            setAppointments(result.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[appointments])
  // const appointmentRdx = useSelector(appointmentData)
  // console.log(appointmentRdx);
  const appointmentSelected = (appointment) => {

    dispatch(addChoosenAppointment({ choosenAppointment: appointment}))
    console.log({ choosenAppointment: appointment})
    setTimeout(() => {
      navigate('/modify/appointment');
    }, 500)
  
  }

  return (
    <div>AppointmentsAsClient

{ appointments.length > 0 ? 
      (<div className="cardsContainer">
        {
          appointments.map(
            appointment => {
              return (
                  <div
                    onClick = {() => appointmentSelected(appointment)}
                    className= "userCardDesign"
                    key={appointment.id}>
                    {appointment.date}
                    
                  </div>
              )
            }
          )

        }  
        </div>)
        
        :

        ( <Spinner animation="border" variant="primary" />)
      
      }
    </div>
  )
}
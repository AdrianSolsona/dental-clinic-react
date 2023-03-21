import React, {useState, useEffect} from 'react'


//Conexion a REDUX
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { appointmentsAll } from '../../services/apiCalls';


export const Appointment = () => {

    const [appointment, setAppointment] = useState([]);


    const ReduxCredentials = useSelector(userData);
    console.log(ReduxCredentials)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        //console.log(users.length)
        if(appointment.length === 0){

            appointmentsAll(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result)
                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setAppointment(result.data.citasActivas)
                    }
                )
                .catch(error => console.log(error));
        }

    },[appointment])

   

     return (
         <div className='usersDesign'>

            { appointment.length > 0 ? 
                
                (<div>

                    {
                        appointment.map(
                            tag => {
                                return (
                                    <div 
                                    
                                        key={tag.id}>

                                        {tag.status}
                                        

                                    </div>
                                )
                            }
                        )
                    }


                </div>)

                : 

                (<div>ESTAN VINIENDO</div>)

            }

         </div>
     )
}
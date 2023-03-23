import React, {useState, useEffect} from 'react'
import './profileData.css';

import { dataUsers } from '../../services/apiCalls';

//Conexion a REDUX
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


export const ProfileData = () => {

    const [users, setUsers] = useState([]);

    const ReduxCredentials = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        //console.log(users.length)
        if(users.length === 0){

            dataUsers(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result)
                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setUsers(result.data)
                    }
                )
                .catch(error => console.log(error));
        }

    },[users])

    const selected = (persona) => {
        
        
        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/detail");
        },500)
    }
    
     return (
         <div className='usersDesign'>

            



           { users.username }
           { users.email }
           { users.surname }
           

         </div>
     )
}


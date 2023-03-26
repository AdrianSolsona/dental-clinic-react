import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Footer } from '../../components/Footer/Footer';
import { InputText } from '../../components/InputText/InputText';
import { NavBar } from '../../components/Navbar/NavBar';
import { updateAppointment } from '../../services/apiCalls';
import { appointmentData } from '../appointmentsSlice';
import { userData } from '../userSlice';
import './modifyAppointment.css'
import { useNavigate } from 'react-router-dom';



export const ModifyAppointment = () => {

  const navigate = useNavigate();

  const [dataAppointment, setDataAppointment] = useState({
    date: "",

  })

  const [welcome, setWelcome] = useState("");
  

  const inputHandler = (e) => {
    setDataAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const credentialsRdx = useSelector(userData);
  const appointmentRdx = useSelector(appointmentData)
 
  let appointmentId = appointmentRdx.choosenAppointment.id; 
  console.log(appointmentId)
  const checkError = (e) => {};

  const updateApp = () => {
    console.log("entro en submit");  
    updateAppointment( appointmentId, dataAppointment, credentialsRdx.credentials.token);
    console.log(updateAppointment)
      setWelcome(`¡Fecha modificada con exito!`);
      setTimeout(()=>{
        
        navigate("/appointments/book");
    },1000)
    
  };

  return (
    <>
    <div>
    <NavBar/>
    {welcome !== "" ? (
            <div className='date-confirm'>{welcome}</div>
            
          ) : (
    <div className='all-time'>
    <div className='time-container'>
    <div className='icon-appointment'><i class="bi bi-calendar3"></i></div>
    <InputText className="datetime-btn"
                  type={"datetime-local"}
                  name={"date"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div className='confirm'
                    onClick={                     
                        () => { 
                          updateApp();
                    }}
                  >
                    Confirmar
                  </div>
                    </div>
                    </div>
                          )}
                    </div>
    <Footer/>
</>
  )
}
import React, {useState, useEffect} from 'react'
import { bookAppointment } from '../../services/apiCalls';
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import { InputText } from "../../components/InputText/InputText";
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import './createAppointment.css'
import { useNavigate } from 'react-router-dom';

export const NewAppointmentPage = () => {

  const navigate = useNavigate();

  const credentialsRdx = useSelector(userData);

  const [infoAppointment, setInfoAppointment] = useState({
    date: "",

  });

  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    setInfoAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [valiInfoAppointment, setValiInfoAppointment] = useState({
    dateVali: false,
  });

  const [BookAppointmentAct, setBookAppointmentAct] = useState(false);

  useEffect(() => {
    for (let empty in infoAppointment) {
      if (infoAppointment[empty] === "") {
        setBookAppointmentAct(false);
        return;
      }
    }

    for (let validated in valiInfoAppointment) {
      if (valiInfoAppointment[validated] === false) {
        setValiInfoAppointment(false);
        return;
      }
    }
    setBookAppointmentAct(true);
  });

  const checkError = (e) => {};

  const bookApp = () => {
    
    bookAppointment(infoAppointment, credentialsRdx.credentials.token);
    setWelcome(`¡Nueva cita realizada con exito!`);
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
                              <div className='confirm btn-1'
                  onClick={
                      () => { 
                        bookApp();
                  }}
                >
          Confirmar cita nueva
          </div>
          </div>
          </div>
                )}
          </div>
    
        <Footer/>
      </>
  );              

}
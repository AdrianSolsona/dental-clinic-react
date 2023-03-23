import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { InputText } from '../../components/InputText/InputText';
import { updateAppointment } from '../../services/apiCalls';
import { appointmentData } from '../appointmentsSlice';
import { userData } from '../userSlice';



export const ModifyAppointment = () => {

  const [dataAppointment, setDataAppointment] = useState({
    date: "",

  })

  

  const inputHandler = (e) => {
    setDataAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //console.log(appointmentData)
  const credentialsRdx = useSelector(userData);
  //console.log(credentialsRdx)
  const appointmentRdx = useSelector(appointmentData)
  //console.log(appointmentRdx)
  //console.log(choosenAppointment)

  let appointmentId = appointmentRdx.choosenAppointment.id; 
  console.log(appointmentId)
  const checkError = (e) => {};

  const updateApp = () => {
    console.log("entro en submit");  
    updateAppointment( appointmentId, dataAppointment, credentialsRdx.credentials.token);
    console.log(updateAppointment)
    
 
  };

  return (
    <>
    <div>

   
    {/* {appoimentSelectedRdx.choosenAppointment.id }
    <InputText
                  // className={
                  //   credentialsError.nameError === ""
                  //     ? "inputBasicDesign"
                      
                  //     : "inputBasicDesign inputErrorDesign"
                  // }
                  type={"text"}
                  name={"name"}
                  placeholder="Name"
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                /> */}
    <br />
    
    <InputText
                  // className={
                  //   credentialsError.nameError === ""
                  //     ? "inputBasicDesign"
                      
                  //     : "inputBasicDesign inputErrorDesign"
                  // }
                  type={"datetime-local"}
                  name={"date"}
                  
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
  </div>
    <div
    // type="submit"
    // className={
    //   updateAppointmentAct
    //     ? "registerSendDeac registerSendAct text-center"
    //     : "registerSendDeac text-center"
    // }
    onClick={
      // updateAppointmentAct
        () => { 
          updateApp();
          
        //   }
        // : () => {}
    }}
  >
    Submit
  </div>
</>
  )
}
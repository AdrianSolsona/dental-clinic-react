import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { InputText } from '../../components/InputText/InputText';
import { updateAppointment } from '../../services/apiCalls';
import { appointmentData, addChoosenAppointment } from '../appointmentsSlice'
import { userData } from '../userSlice';

export const ModifyAppointment = () => {

  const dispatch = useDispatch();

  const appoimentSelectedRdx = useSelector(appointmentData);
  const credentialsRdx = useSelector(userData);

  const [dataAppointment, setDataAppointment] = useState({
    date: appoimentSelectedRdx.choosenAppointment.date,
    // add other properties of the appointment here
  });

  const inputHandler = (e) => {
    setDataAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateApp = async () => {
    try {
      await updateAppointment(dataAppointment, credentialsRdx.credentials.token);
      dispatch(addChoosenAppointment(dataAppointment));
      console.log('Appointment updated successfully!');
    } catch (error) {
      console.log('Error updating appointment:', error);
    }
  };

  return (
    <>
      <div>
        {appoimentSelectedRdx.choosenAppointment.date }
        <InputText
          type={"datetime-local"}
          name={"date"}
          required={true}
          value={dataAppointment.date}
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div onClick={() => updateApp()}>
        Submit
      </div>
    </>
  );
};

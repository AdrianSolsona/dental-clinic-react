import React, { useEffect, useState } from 'react'
import { Navbar, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments, deleteMyAppointment } from '../../services/apiCalls';
import { addChoosenAppointment, appointmentData } from '../appointmentsSlice';
import { userData } from '../userSlice';
import "./appointmentUser.css"
import { Col, Container, Row } from 'react-bootstrap';
import { NavBar } from '../../components/Navbar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import Moment from 'moment';

export const AppointmentsAsClient = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const credentialsRdx = useSelector(userData)
  console.log(credentialsRdx)
  const appoimentSelectedRdx = useSelector(appointmentData)
  let params = appoimentSelectedRdx.choosenAppointment.id
  console.log(params);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(appointments.length === 0){
      setTimeout(() => {
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            setLoading(false);
            console.log(result.data)
            if(result.data.length === 0){
              return
            }
            setAppointments(result.data);
          }
        )
        .catch(error => console.log(error))
      }, 500)
    }
  },[appointments])
  
  const appointmentSelected = (appointment) => {
    dispatch(addChoosenAppointment({ choosenAppointment: appointment }))
    console.log(addChoosenAppointment({ choosenAppointment: appointment }))
    setTimeout(() => {
      navigate('/modify/appointment');
    }, 1000)
  }
  const deleteApp =  async (appointment) =>{
    await deleteMyAppointment(  appointment.id,credentialsRdx.credentials.token)
    setAppointments(prevAppointments => prevAppointments.filter(a => a.id !== appointment.id));
}

if (loading) {
  return  <div className='date-confirm'>Cargando tus citas</div>;
} else if (appointments.length > 0) {
  return(
  <>
    <NavBar/>
    <div 
        onClick = {()=>navigate("/createAppointments")}
        className= "deleteDesign btn-date"
      >
      Pedir cita nueva
    </div>
    <div className='your-appointments'>Todas tus citas</div>
    <Container>
      <Row className='all-appointment'>
        {appointments.map(appointment => {
          return (
            <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={4} key={appointment.id}>
              <div className='container-int'>
                <div
                  className= "cont-treatment-1"
                >
                  <div>
                  <div className='icon-appointment'><i class="bi bi-journal-text"></i></div>
                  </div>
                  <div className='treatment-line'>
                  <div className='line-1'>Hora:</div><div>{Moment(appointment.date).format('DD/MM/YYYY HH:mm:ss')}</div>
                  </div>
                  <div className='treatment-line'>
                  <div className='line-1'>Estado:</div><div> {appointment.status}</div>
                  </div>
                  <div className='treatment-line'>
                  <div className='line-1'>Coste:</div><div> {appointment.Treatment.price}</div>
                  </div>
                  <div className='treatment-line'>
                  <div className='line-1'>Tratamiento:</div> <div> {appointment.Treatment.name}</div>
                  </div>
                  <div className='treatment-line'>
                  <div className='line-1'>Duración:</div> <div> {appointment.Treatment.duration}</div>
                  </div>
                  
                  <div className='all-buttons'>
                    <div
                    onClick = {() => deleteApp(appointment)}
                    className= "deleteDesign"
                  >
                    Borrar
                  </div>
                  <div onClick = {() => appointmentSelected(appointment)} className= "deleteDesign">
                    Modificar
                  </div>
                  </div>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
    <Footer></Footer>
    </>
  )
} else {
  return (
    <div>
      <div className='date-confirm'>No hay citas</div>
    </div>
  )
}
}
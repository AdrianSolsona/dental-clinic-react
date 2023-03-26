import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAllAppointmentsAsDoctor } from '../../services/apiCalls';
import { userData } from '../userSlice';
import { NavBar } from '../../components/Navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import Moment from 'moment';

export const AppointmentsAsDentist = () => {

    const [allAppointments, setAllAppointments] = useState([]);

  const credentialsRdx = useSelector(userData)

  useEffect(() => {

    if(allAppointments.length === 0){
      bringAllAppointmentsAsDoctor(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result.data)
            
  
            setAllAppointments(result.data)
          }
        )
        .catch(error => console.log(error))
    }
  },[allAppointments])

  return (
    <>
    <NavBar/>
    <div className='your-appointments'>Todas mis citas</div>
        <Container>
      { allAppointments.length > 0 ? 
            (<Row>
              {
                allAppointments.map(
                  appointment => {
                    return (
                      <Col key={appointment.id} sm="12" md="12" lg="6" xl="6" xxl="4">
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
                              <div className='line-1'>Observaciones:</div><div> {appointment.observations}</div>
                              </div>
                              <div className='treatment-line'>
                              <div className='line-1'>Tratamiento:</div> <div> {appointment.Treatment.name}</div>
                              </div>
                              <div className='treatment-line'>
                              <div className='line-1'>Duración:</div> <div> {appointment.Treatment.duration}</div>
                              </div>
                          </div>
                        </div>
                      </Col>
                    )
                  }
                )
              }  
              </Row>)
              :
              (<div className='date-confirm'>CARGANDO TUS CITAS...</div>)
      }
        </Container>
      <Footer/>
    </>
  )
}
import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { appointmentsAll } from '../../services/apiCalls';
import { NavBar } from '../../components/Navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import Moment from 'moment';
import './appointments.css'


export const Appointment = () => {

    const [appointment, setAppointment] = useState([]);
    

    const ReduxCredentials = useSelector(userData);
    console.log(ReduxCredentials)

    const navigate = useNavigate();

    useEffect(()=>{
        if(appointment.length === 0){

            appointmentsAll(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result)
                        //Despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setAppointment(result.data.citasActivas)
                    }
                )
                .catch(error => console.log(error));
        }

    },[appointment])

     return (
        <>
        <NavBar/>
        <div className='your-appointments'>Todas las citas</div>
            <Container>
            { appointment.length > 0 ? 
                (<Row>
                    {
                        appointment.map(
                            tag => {
                                return (
                                    <Col key={tag.id} sm="12" md="6" lg="6" xl="6" xxl="4">
                                        <div className='container-int'>
                                            <div
                                            className= "cont-treatment-1"
                                            >
                                            <div>
                                            <div className='icon-appointment'><i class="bi bi-journal-text"></i></div>
                                            </div>
                                            <div className='treatment-line'>
                                            <div className='line-1'>Hora:</div><div>{Moment(tag.date).format('DD/MM/YYYY HH:mm:ss')}</div>
                                            </div>
                                            <div className='treatment-line'>
                                            <div className='line-1'>Estado:</div><div> {tag.status}</div>
                                            </div>
                                            <div className='treatment-line'>
                                            <div className='line-1'>NºTratamiento:</div><div> {tag.treatment_id}</div>
                                            </div>
                                            <div className='treatment-line'>
                                            <div className='line-1'>NºPaciente:</div><div> {tag.pacient_id}</div>
                                            </div>
                                            <div className='all-buttons'>
                                            <div onClick = {()=>navigate("/appointments/dentist")} className= "deleteDesign delete-1">
                                                Ir a mis citas
                                            </div>
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
                
                (<div className='date-confirm'>CARGANDO TODAS LAS CITAS...</div>)
                
            }
            </Container>
         <Footer/>
         </>
     )
}

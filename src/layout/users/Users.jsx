import React, {useState, useEffect} from 'react'
import './Users.css';
import { bringUsers } from '../../services/apiCalls';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { NavBar } from '../../components/Navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';

export const Users = () => {

    const [users, setUsers] = useState([]);

    const ReduxCredentials = useSelector(userData);

    useEffect(()=>{
       
        if(users.length === 0){

            bringUsers(ReduxCredentials.credentials.token)
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

     return (
        <>
        <NavBar/>
        <div className='your-appointments'>Todas los usuarios</div>
        <Container>
            { users.length > 0 ? 
                (<Row>
                    {
                        users.map(
                            persona => {
                                return (
                                    <Col key={persona.id} sm="12" md="6" lg="6" xl="6" xxl="4">
                                    <div className='container-int'>
                                        <div
                                        className= "cont-treatment-1"
                                        >
                                        <div>
                                        <div className='icon-1'><i class="bi bi-journal-text"></i></div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Username:</div><div> {persona.username}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Nombre:</div><div> {persona.name}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Apellido:</div><div> {persona.surname}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Email:</div><div> {persona.email}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Teléfono:</div><div> {persona.phone}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Dirección:</div><div> {persona.address}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Codigo postal:</div><div> {persona.postcode}</div>
                                        </div>
                                        <div className='treatment-line'>
                                        <div className='line-1'>Género:</div><div> {persona.gender}</div>
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
                (<div className='date-confirm'>CARGANDO TODAS LOS USUARIOS...</div>)
            }
        </Container>
        <Footer/>
        </>
     )
}
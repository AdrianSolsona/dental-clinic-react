
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import { Col, Container, Row } from 'react-bootstrap';
import React from "react";
import CardComponent from "../../components/Card/Card";
import './Treatments.css'
import peopleSunrise from '../../assets/people-sunrise.jpg';
import clinicUbication from '../../assets/clinic-vlc.jpeg'
import implantImage from '../../assets/implantologiadef.jpg'
import dentalProtesis from '../../assets/protesis-dentales.jpg'
import orthodontic from '../../assets/ortodoncia.jpg'
import odontology from '../../assets/odontologia-general.jpg'
import dentalEstetic from '../../assets/estetica-dental.jpg'

export const Treatment = () => {
    return (
        <>
            <NavBar/>
            <div className="titles">Implantología<i class="bi bi-arrow-right-short arrow-title"></i></div>
            <Container>
                <Row className='flex-row d-flex'>
                    <Col md>
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Implantología"
                            text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
                            />
                    </Col>
                    <Col md>
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Implantología"
                            text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
                        />
                    </Col>
                    <Col md>
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Implantología"
                            text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
                        />
                    </Col>        
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
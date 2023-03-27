import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar';
import peopleSunrise from '../../assets/people-sunrise.jpg';
import clinicUbication from '../../assets/clinic-vlc.jpg'
import implantImage from '../../assets/implantologiadef.jpg'
import dentalProtesis from '../../assets/protesis-dentales.jpg'
import orthodontic from '../../assets/ortodoncia.jpg'
import odontology from '../../assets/odontologia-general.jpg'
import dentalEstetic from '../../assets/estetica-dental.jpg'
import './Home.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import CardComponent from '../../components/Card/Card';


export const Home = () => {
    return (
        <>
        <NavBar className='navigator'/>
        <div className='cont-discount'>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={6} xl={6} xxl={6} className='col-discount'>
                        <div className='picture-people'>
                            <img src= {peopleSunrise} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={12} xl={6} xxl={6} className='col-discount'>
                        <div className='discount'>
                            <p className='price'>200€</p>
                            <p className='of-discount'>de descuento</p>
                            <p className='treatment'>en tu tratamiento de ortodoncia invisible o implante + corona</p>
                            <div className='button-discount'>
                                <Button className='appointment-free'>Pide tu cita gratis</Button>
                                <Button className='information'>Información</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='clinic-vlc'>
            <div className='clinic-ubication'>
                <div>
                    <img src={clinicUbication} alt="" />
                </div>
            </div>
            <div className='text-ubication'>
                <p className='your-clinic'>Tu clinica dental en valencia</p>
                <p className='near-you'>Factordent es una compañía dental estable y consolidada que cuenta con una gran red de centros cerca de ti para ayudarte.</p>
                <Button className='know-btn'>¿Vienes a conocernos?</Button>
            </div>
        </div>
        <div className='confidence-all'>
            <p className='our-data'>Nuestro datos nos respaldan</p>
            <p className='are-confidence'>Somos tu clínica dental de confianza</p>
            <div className='general-data'>
                <div className='more-data'>
                    <p className='number-data'>+33</p>
                    <p className='data-all'>años de experiencia</p>
                </div>
                <div className='more-data'>
                    <p className='number-data'>+20</p>
                    <p className='data-all'>tratamientos dentales</p>
                </div>
                <div className='more-data'>
                    <p className='number-data'>+300</p>
                    <p className='data-all'>euros en descuentos disponibles</p>
                </div>
                <div className='more-data'>
                    <p className='number-data'>+250000</p>
                    <p className='data-all'>pacientes tratados en clínica</p>
                </div>
            </div>
        </div>
        <div className='know-treatments'>
            <div className='our-data'>Comprueba cómo te podemos ayudar</div>
            <div className='are-confidence'>Conoce nuestros tratamientos</div>
        </div>
        <Container>
            <Row className='flex-row d-flex container-all-card '>
                <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                    <CardComponent
                        image={implantImage}
                        showButton={true} 
                        title= "Implantología"
                        text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
                    />
                </Col>
                <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                    <CardComponent
                        image={dentalProtesis}
                        showButton={true} 
                        title= "Prótesis dentales"
                        text="Colocamos prótesis que son muy naturales, no se notan, duran hasta 15 años y te permiten volver a sonreír y comer con normalidad."
                    />
                </Col>
                <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                    <CardComponent
                        image={orthodontic}
                        showButton={true} 
                        title= "Ortodoncia"
                        text="Realizamos tratamientos de ortodoncia tanto con alineadores transparentes como con brackets (metálicos y de zafiro)."
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={6} xl={4} xxl={4} className="card-container card-final">
                    <CardComponent
                        image={odontology}
                        showButton={true} 
                        title= "Odontología General"
                        text="Eliminamos las caries y las enfermedades de las encías (periodontitis o <strong>piorrea</strong>): empastes, endodoncias, curetajes..."
                    />
                </Col>
                <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                    <CardComponent
                        image={dentalEstetic}
                        showButton={true} 
                        title= "Estética dental"
                        text="Llevamos a cabo tratamientos para mejorar y rejuvenecer la apariencia de la sonrisa: blanqueamiento y carillas. Varios descuentos disponibles."
                    />
                </Col>
                <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                    <CardComponent
                        image={implantImage}
                        showButton={true} 
                        title= "Elevaciones maxilares"
                        text="Utilizamos implantes europeos de primera calidad, que tienen una tasa de éxito del 99% y que no se distinguen del resto de tus dientes."
                    />
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
        
    )
};
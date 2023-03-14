import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar';
import peopleSunrise from '../../assets/people-sunrise.jpg';
import clinicUbication from '../../assets/clinic-vlc.jpeg'
import implantImage from '../../assets/implantologiadef.jpg'
import dentalProtesis from '../../assets/protesis-dentales.jpg'
import orthodontic from '../../assets/ortodoncia.jpg'
import odontology from '../../assets/odontologia-general.jpg'
import dentalEstetic from '../../assets/estetica-dental.jpg'
import './Home.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
    return (
        <>
        <NavBar/>
        <div className='cont-discount'>
            <div className='picture-people'>
                <img src= {peopleSunrise} alt="" />
            </div>
            <div className='discount'>
                <p className='price'>200€</p>
                <p className='of-discount'>de descuento</p>
                <p className='treatment'>en tu tratamiento de ortodoncia invisible o implante + corona</p>
                <div className='button-discount'>
                    <Button className='appointment-free'>Pide tu cita gratis</Button>
                    <Button className='information'>Información</Button>
                </div>
            </div>
        </div>
        <div className='clinic-vlc'>
            <div className='clinic-ubication'>
                <div>
                    <img src={clinicUbication} alt="" />
                </div>
                <div>
                    <div className='text-ubication'>
                        <p className='your-clinic'>Tu clinica dental en valencia</p>
                        <p className='near-you'>Factordent es una compañía dental estable y consolidada que cuenta con una gran red de centros cerca de ti para ayudarte.</p>
                        <Button className='know-btn'>¿Vienes a conocernos?</Button>
                    </div>
                </div>
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
        <Container className='all-treatments'>
      <Row className='all-treatments-row'>
        <Col className='treatment-single'>
            <div className='cont-treatment'>
                <img className='img-logo' src={implantImage} alt=""/>
                <div className='title-treatment'>Implantología</div>
                <p className='text-treatment'>Utilizamos implantes europeos de primera calidad, que tienen una<strong> tasa de éxito</strong> del 99% y que no se distinguen del resto de tus dientes.</p>
                <Button className='appointment-free'>Saber más <i class="bi bi-chevron-right arrow"></i> </Button>
            </div>
        </Col>
        <Col className='treatment-single'>
        <div className='cont-treatment'>
            <img className='img-logo' src={dentalProtesis} alt=""/>
            <div className='title-treatment'>Prótesis dentales</div>
            <p className='text-treatment'>Colocamos prótesis que son muy naturales, no se notan, duran <strong>hasta 15 años</strong>  y te permiten volver a sonreír y comer con normalidad.</p>
            <Button className='appointment-free'>Saber más <i class="bi bi-chevron-right arrow"></i> </Button>
        </div>
        </Col>
        <Col className='treatment-single'>
            <div className='cont-treatment'>
                <img className='img-logo' src={orthodontic} alt=""/>
                <div className='title-treatment'>Ortodoncia</div>
                <p className='text-treatment'>Realizamos tratamientos de ortodoncia tanto con <strong>alineadores transparentes</strong>  como con brackets (metálicos y de zafiro).</p>
                <Button className='appointment-free'>Saber más <i class="bi bi-chevron-right arrow"></i> </Button>
            </div>
        </Col>
      </Row>
      <Row>
      <Col className='treatment-single' xs>
            <div className='cont-treatment'>
                <img className='img-logo' src={odontology} alt=""/>
                <div className='title-treatment'>Odontología General</div>
                <p className='text-treatment'>Eliminamos las caries y las enfermedades de las encías (periodontitis o <strong>piorrea</strong>): empastes, endodoncias, curetajes...</p>
                <Button className='appointment-free'>Saber más <i class="bi bi-chevron-right arrow"></i> </Button>
            </div>
        </Col>
        <Col className='treatment-single' xs>
            <div className='cont-treatment'>
                <img className='img-logo' src={dentalEstetic} alt=""/>
                <div className='title-treatment'>Estética dental</div>
                <p className='text-treatment'>Llevamos a cabo tratamientos para mejorar y rejuvenecer la apariencia de la sonrisa: <strong>blanqueamiento y carillas. </strong>Varios descuentos disponibles.</p>
                <Button className='appointment-free'>Saber más <i class="bi bi-chevron-right arrow"></i> </Button>
            </div>
        </Col>
        <Col className='treatment-single' xs>
            <div className='cont-treatment'>
                <img className='img-logo' src={implantImage} alt=""/>
                <div className='title-treatment'>Elevaciones maxilares</div>
                <p className='text-treatment'>Utilizamos implantes europeos de primera calidad, que tienen una<strong> tasa de éxito</strong> del 99% y que no se distinguen del resto de tus dientes.</p>
                <Button className='appointment-free'>Saber más <i class="bi bi-chevron-right arrow"></i> </Button>
            </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
    
    </>
        
    )
};
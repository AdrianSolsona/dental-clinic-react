
import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar';
import peopleSunrise from '../../assets/people-sunrise.jpg';
import clinicUbication from '../../assets/clinic-vlc.jpeg'
import './Home.css';
import { Button } from 'react-bootstrap';



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
        <div className='all-treatments'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </>
        
    )
};
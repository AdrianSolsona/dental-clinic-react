import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import { Col, Container, Row } from 'react-bootstrap';
import React from "react";
import CardComponent from "../../components/Card/Card";
import './Treatments.css'
import implantImage from '../../assets/implantologiadef.jpg'
import dentalProtesis from '../../assets/protesis-dentales.jpg'
import orthodontic from '../../assets/ortodoncia.jpg'
import odontology from '../../assets/odontologia-general.jpg'
import dentalEstetic from '../../assets/estetica-dental.jpg'

export const Treatment = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <Row className='flex-row d-flex container-all-card '>
                    <div className="titles">Implantología<i class="bi bi-arrow-right-short arrow-title"></i></div>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={implantImage}
                            showButton={true} 
                            title= "Implante dental unitario"
                            text="El tratamiento con implantes dentales es uno de los mas demandados dentro de la Odontología y con posibilidad de finalización en un solo dia ..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={implantImage}
                            showButton={true} 
                            title= "Implantes de carga inmediata"
                            text="Los implantes de carga inmediata permiten instalar una prótesis provisional en el mismo día... "
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={implantImage}
                            showButton={true} 
                            title= "Injerto de hueso y regenación ósea dental"
                            text="El injerto de hueso dental es una cirugía que se emplea para la reconstrucción de defectos óseos..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex container-all-card '>
                    <div className="titles">Prótesis dentales<i class="bi bi-arrow-right-short arrow-title"></i></div>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Prótesis dental fija sobre implantes"
                            text="Las prótesis fijas sobre implantes nos permiten recuperar la funcionalidad y estética de la cavidad bucal..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Prótesis dental fija"
                            text="Las prótesis dentales fijas tienen como objetivo reproducir la anatomía de los dientes y tambien de la cavida bucal como en cualquier protesis..."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={dentalProtesis}
                            showButton={true} 
                            title= "Limpieza de prótesis dental"
                            text="Las prótesis dentales requieren una limpieza preferiblemente de manera periódica..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex container-all-card '>
                    <div className="titles">Ortodoncia<i class="bi bi-arrow-right-short arrow-title"></i></div>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={orthodontic}
                            showButton={true} 
                            title= "Brackets"
                            text="Los brackets son uno de los tratamientos de ortodoncia más utilizados en la actualidad con ciertas ventajas respecto a otros tratamientos..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={orthodontic}
                            showButton={true} 
                            title= "Ortodoncia invisible"
                            text="La ortodoncia invisible es un tratamiento compuesto por alineadores transparentes, removibles y fabricados a medida..."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={orthodontic}
                            showButton={true} 
                            title= "Ortodoncia infantil"
                            text="La ortodoncia infantil está dirigida a los niños que desarrollan en su infancia temprana cualquier tipo de afección respiratoria..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex container-all-card '>
                    <div className="titles">Odontología<i class="bi bi-arrow-right-short arrow-title"></i></div>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={odontology}
                            showButton={true} 
                            title= "Odontología conservadora"
                            text="Engloba todos aquellos tratamientos orientados a salvar y mantener en la boca los dientes naturales del paciente..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={odontology}
                            showButton={true} 
                            title= "Periodoncia"
                            text="La Periodoncia es la especialidad de la Odontología encargada del cuidado de las encías, muy importante en caso de tener encías sensibles..."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={odontology}
                            showButton={true} 
                            title= "Endodoncia"
                            text="Se trata de desvitalizar el diente, conocido coloquialmente como matar el nervio, siendo un tratatamiento menos agresivo que la periodoncia..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex container-all-card '>
                    <div className="titles">Estética dental<i class="bi bi-arrow-right-short arrow-title"></i></div>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={dentalEstetic}
                            showButton={true} 
                            title= "Carillas dentales"
                            text="Se colocan en la superficie frontal de los dientes con la finalidad de mejorar la estética y la simetría de la sonrisa..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={dentalEstetic}
                            showButton={true} 
                            title= "Blanqueamiento dental"
                            text="Es uno de los tratamientos estéticos más solicitados por nuestros pacientes en clínica..."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={dentalEstetic}
                            showButton={true} 
                            title= "Limpieza dental avanzada"
                            text="Es una técnica de higiene bucal basada en la acción del polvo de bicarbonato de sodio..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Register.css'

export const Register = () => {

  let user = {
    name: "",
    email: ""
}

const [value, setValue] = useState(user);
const {email,username} = value;


const newValue = ({target}) =>{
    console.log(target)


    const {name, value} = target;
    setValue({
        ...value,
        [name]:value
    }
    )
}

  return (
    <>
      <NavBar/>
      <div className='container-icon'>
        <i className="bi bi-person-workspace icon-login"></i>
      </div>
      <Container className="container-register">
        <Row>
          <Col md={6}>
            <Form className="form-info">
              <Form.Group className="form-group" controlId="formBasicEmail">
                <Form.Control className='input-form' type="text" placeholder="Email" name="username" value={username} onChange={newValue} />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form'  type="email" placeholder="Contraseña" name="email" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control  className='input-form'type="email" placeholder="Usuario" name="nameUser" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Nombre" name="name" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Apellido" name="surname" value={email} onChange={newValue}/>
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <Form className="form-info">
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Dirección" name="adress" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Teléfono" name="phone" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Fecha de nacimiento" name="date" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Género" name="gendre" value={email} onChange={newValue}/>
              </Form.Group>
              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Control className='input-form' type="email" placeholder="Código Postal" name="postcode" value={email} onChange={newValue}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className='btn-container'>
        <Button className='btn-login' variant="primary" type="submit">Login</Button>
      </div>
      <Footer/>
    </>
        );
}

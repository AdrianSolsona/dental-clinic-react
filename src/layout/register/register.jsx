
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"

import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Register.css'
import { InputText } from "../../components/InputText/InputText";

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
        <Row className="row-input">
          <Col md={12} lg={6} className="container-inputs">
              <InputText className="hola"
                    type="email"
                    name="email"
                    placeholder="Email"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
            
                
              
                <InputText
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  changeFunction={(e) => inputHandler(e)}
                  validateFunction={(e) => inputValidate(e)}
                  value={username}
                  onChange={newValue}
                />
             
              <InputText
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario"
                  changeFunction={(e) => inputHandler(e)}
                  validateFunction={(e) => inputValidate(e)}
                  value={username}
                  onChange={newValue}
                />
        
                <InputText
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
              
                <InputText
                    type="text"
                    name="surname"
                    placeholder="Apellido"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
             
          </Col>
          <Col md={12} lg={6} className="container-inputs cont-inp-2">
            
              <InputText
                    type="text"
                    name="address"
                    placeholder="Dirección"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
           
              <InputText
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
              
              <InputText
                    type="text"
                    name="dateBirth"
                    placeholder="Fecha de nacimiento"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
              
              <InputText
                    type="text"
                    name="gendre"
                    placeholder="Género"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
              <InputText
                    type="text"
                    name="postal"
                    placeholder="Codigo postal"
                    changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)}
                    value={username}
                    onChange={newValue}
                  />
              
            
          </Col>
        </Row>
      </Container>
      <div className='btn-container'>
        <Button className='btn-login' variant="primary" type="submit">Register</Button>
      </div>
      <Footer/>
    </>
        );
}

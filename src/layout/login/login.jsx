
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { InputText } from "../../components/InputText/InputText";


export const Login = () => {
    return (
        <>
        <NavBar/>
        <div className='all-form'>
      <Form className='form-info'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className='container-icon'>
        <i class="bi bi-person-workspace icon-login"></i>
        </div>
          <InputText 
            type="email"
            name="email"
            placeholder="Email"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <Form.Text className="text-muted">
            Tienes que introducir caracteres válidos.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <InputText
            type="password"
            name="password"
            placeholder="Contraseña"
            changeFunction={(e) => inputHandler(e)}
            validateFunction={(e) => inputValidate(e)}
          />
        </Form.Group>
        <div className='btn-container'>
          <Button className='btn-login' variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
        <Footer/>
        </>
    )
}
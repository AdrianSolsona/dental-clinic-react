
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'


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
          <Form.Control className='input-form' type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Tienes que introducir caracteres válidos.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='input-form' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
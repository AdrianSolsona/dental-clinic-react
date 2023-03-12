import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function FormRegister() {

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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="username" value={username} onChange={newValue} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Password" name="email" value={email} onChange={newValue}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );
}

export default FormRegister;
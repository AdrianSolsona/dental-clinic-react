import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import Form from 'react-bootstrap/Form';
import { ButtonAct } from "../../components/ButtonAct/ButtonAct";
import './Login.css'
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { logMe } from "../../services/apiCalls";
import { decodeToken } from "react-jwt";

export const Login = () => {
  
  const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginAct, setLoginAct] = useState(false);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  

  const logeame = () => {

    logMe(credenciales)
        .then(
            respuesta => {

              
                let decodificado= decodeToken(respuesta.data.token)
                console.log("decoded",decodificado)
                let datosBackend = {
                    token: respuesta.data.token,
                    usuario: decodificado
                }

                console.log(datosBackend);
                //Este es el momento en el que guardo en REDUX
                dispatch(login({credentials: datosBackend}));
            }
        )
        .catch(error => console.log(error))

  }

  const inputValidate = (e) => {
    switch(e.target.name){
      case "email":
        break;

        case "password":

          if (credenciales.password.length < 8){
            setCredencialesError((prevState) => ({
              ...prevState,
              passwordError: "Debes escribir como minimo 8 caracteres",
            }));
          }else {
            setCredencialesError((prevState) =>({
              ...prevState,
              passwordError : "",
            }));
          }

          break;

          default:
            console.log("uff....")
    }
  };

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setLoginAct(false);
        return;
        
      }
    }

    for (let vacio in credenciales) {
      if (credenciales[vacio] === "") {
        setLoginAct(false);
        return;
      }
    }

    for (let validated in valiCredenciales) {
      if (valiCredenciales[validated] === false) {
        setLoginAct(false);
      }
    }

    setLoginAct(true);
  });

  const checkError = (e) => {
    let error = "";

    let checked = validate(e.target.name, e.target.value, e.target.required);



    error = checked.message;

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const sendValue = () => {};

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
             className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
            }
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
            validateFunction={(e) => inputValidate(e)}
          />
          <Form.Text className="text-danger">
                {credencialesError.emailError}
              </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <InputText
             className={
              credencialesError.passwordError === ""
                ? "inputBasicDesign"
                : "inputBasicDesign inputErrorDesign"
            }
            type="password"
            name="password"
            placeholder="Contraseña"
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
            validateFunction={(e) => inputValidate(e)}
          />
        <Form.Text className="text-danger">
          {credencialesError.passwordError}
        </Form.Text>
        </Form.Group>
        <div className="btn-container">
          <ButtonAct 
            className={loginAct ? "loginSendDeac loginSendAct" : "loginSendDeac"}
            buttonName="Confirmar"
            //   onClick={loginAct ? sendValue : () => {}}
            onClick={loginAct ? logeame : () => {}}
          />
        </div>
      </Form>
    </div>
        <Footer/>
        </>
    )
}
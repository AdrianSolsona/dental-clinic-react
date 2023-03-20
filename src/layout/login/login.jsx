import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import Form from 'react-bootstrap/Form';
import { ButtonAct } from "../../components/ButtonAct/ButtonAct";
import './Login.css'
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
import { logMe } from "../../services/apiCalls";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);

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

  
  const [welcome, setWelcome] = useState("");
  
    useEffect(() => {
      if (credentialsRdx.credentials.token) {
        //Si No token...home redirect
        navigate("/");
      }
    }, []);
  

   const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
   }
  

  const logeame = () => {

    logMe(credenciales)
        .then(
            respuesta => {
                console.log(respuesta)
                let decodificado= decodeToken(respuesta.data.token)
                let datosBackend = {
                    token: respuesta.data.token,
                    usuario: decodificado
                }

                console.log(datosBackend);
                //Este es el momento en el que guardo en REDUX
                dispatch(login({credentials: datosBackend}));

                //Una vez nos hemos logeado...mostramos mensaje de bienvenida...
                setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.username}`);

                //Redirección a Home

                setTimeout(() => {
                  navigate("/home");
                }, 3000);
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
    
      <NavBar />
        <div className="loginDesign">
          {welcome !== "" ? (
            <div>{welcome}</div>
          ) : (
            <div className='all-form'>
              <Form className='form-info'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className='container-icon'>
                    <i class="bi bi-person-workspace icon-login"></i>
                  </div>
                  <>
                  <div>
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
                        onClick={loginAct ? logeame : () => {}}
                      />
                    </div>
                  </div>
                  </>
                </Form.Group>
              </Form>
            </div>
          )}
        </div>
        <Footer/>
    </>
  )
}

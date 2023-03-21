import React, {useState, useEffect} from 'react'
import { bookAppointment } from '../../services/apiCalls';
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/Navbar/NavBar"
import { Col, Container, Row } from 'react-bootstrap';
import { InputText } from "../../components/InputText/InputText";
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';






export const NewAppointmentPage = () => {

    const credentialsRdx = useSelector(userData);
console.log(credentialsRdx)
  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
    // user_id: credentialsRdx.credentials.user.userId
    // service_id: 1,
    // doctor_id: 1

  });

  const inputHandler = (e) => {
    setInfoAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [valiInfoAppointment, setValiInfoAppointment] = useState({
    dateVali: false,
  });

  const [BookAppointmentAct, setBookAppointmentAct] = useState(false);

  useEffect(() => {
    for (let empty in infoAppointment) {
      if (infoAppointment[empty] === "") {
        setBookAppointmentAct(false);
        return;
      }
    }

    for (let validated in valiInfoAppointment) {
      if (valiInfoAppointment[validated] === false) {
        setValiInfoAppointment(false);
        return;
      }
    }
    setBookAppointmentAct(true);
  });
  const checkError = (e) => {};



    // if (credentialsRdx.credentials.token) {


  const bookApp = () => {
    
    bookAppointment(infoAppointment, credentialsRdx.credentials.token);
    console.log(infoAppointment);
  };


      /////////////////////////////////////////////////////
      return (
        <>
          <NavBar/>
          <div className='container-icon'>
            <i className="bi bi-person-workspace icon-login"></i>
          </div>
          <Container className="container-register">
            <Row className="row-input">
              <Col md={12} lg={6} className="container-inputs">
                  <InputText className={ "inputBasicDesign"}
                        type={"datetime-local"}
                        name={"date"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)} 
                      />
                      
                </Col>   
              <div
          type="submit"
            className={
              BookAppointmentAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
            }
            onClick={
              //Si el hook registerAct es true, el onclick nos permitirá ejecutar la función que haría el registro....
              BookAppointmentAct
                ? () => {
                    bookApp();
                  }
                : () => {}
            }
          >
            Register me!
          </div>
            </Row>
          </Container>
          <Footer/>
        </>
            );              

}
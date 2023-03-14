import React from 'react';
import './Footer.css'
import { Button, Col, Container, Row } from 'react-bootstrap';

 export const Footer = () =>{
    return(
        <div className='all-footer'>
            <Container>
                <Row>
                    <Col className='' xs>
                        <div>
                            <p>FACTORDENT</p>
                        </div>
                        <div>

                        </div>
                        <div>
                            <Button></Button>
                        </div>
                    </Col>
                    <Col className='' xs>
                        <div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
 }
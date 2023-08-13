import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './ContactUs.css'

const ContactUs = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mcps49c', 'template_a4c0rsd', form.current, 'HQA_HNjL7UDI_ZBvP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };




    return (
        <div className="contactUsContainer" id="myContact">
            <div>
                <h1>TOUCH WITH ME</h1>
            </div>
            <Row>
                <Col xs={12}>
                    <div className="content">
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-5" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="user_name" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="user_email" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicMsg">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name="message" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicSend">
                                <Form.Control type="submit" value="Send" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMyname" style={{display:'none'}}>
                                <Form.Control type="text" value="Bharath G" name="to_name" defaultValue="Bharath" />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs;
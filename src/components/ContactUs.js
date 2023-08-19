import React, { useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './ContactUs.css';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ContactUs = ()=>{

    const {ref, inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
      const animation2 = useAnimation();
      const animation3 = useAnimation();
      const animation4 = useAnimation();
      const animation5 = useAnimation();

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

    useEffect(()=>{
        
        if(inView) {
            animation.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.3,
                    duration: 1,
                    type:"tween",
                }
            })

            animation2.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.5,
                    duration: 1,
                    type:"tween",
                }
            })
            animation3.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.7,
                    duration: 1,
                    type:"tween",
                }
            })

            animation4.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.9,
                    duration: 1,
                    type:"tween",
                }
            })

            animation5.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 1.2,
                    duration: 1,
                    type:"tween",
                }
            })
        }

        if(!inView) {
            animation.start({
                opacity: 0,
                x: '-100vw',           
            })
            animation2.start({
                opacity: 0,
                x: '100vw',           
            })
            animation3.start({
                opacity: 0,
                x: '-100vw',           
            })

            animation4.start({
                opacity: 0,
                x: '100vw',    
            })

            animation5.start({
                opacity: 0,
                x: 100,    
            })

        }

    },[inView])


    return (
        <div className="contactUsContainer" id="myContact" ref={ref}>
            <div>
                <motion.h1 animate={animation}>TOUCH WITH ME</motion.h1>
            </div>
            <Row>
                <Col xs={12}>
                    <div className="content">
                        <Form ref={form} onSubmit={sendEmail}>

                            <motion.div animate={animation2}>
                                <Form.Group className="mb-5" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" name="user_name" />
                                </Form.Group>
                            </motion.div>

                            <motion.div animate={animation3}>
                                <Form.Group className="mb-5" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" name="user_email" />
                                </Form.Group>
                            </motion.div>

                            <motion.div animate={animation4}>
                                <Form.Group className="mb-5" controlId="formBasicMsg">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" />
                                </Form.Group>
                            </motion.div>

                            <motion.div animate={animation5}>
                                <Form.Group className="mb-5" controlId="formBasicSend">
                                    <Form.Control type="submit" value="Send"/>
                                </Form.Group>
                            </motion.div>

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
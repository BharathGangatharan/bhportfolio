import React,{ useEffect} from 'react';
import './MyInfo.css';
import Picture from '../image/bharath2.jpg'
import Button from '@material-ui/core/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {HashLink} from 'react-router-hash-link';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const MyInfo = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(()=>{

    if(inView){
      animation.start({
        opacity: 1,
        x: 0,
        scale:[1,1.2,1],
        transition : {
          delay: 0.5,
          duration: 1,
          type:"spring",
        }
      })

      animation2.start({
        opacity: 1,
        x: 0,
        transition : {
          delay: 0.7,
          duration: 1,
          type:"tween",
        }
      })

      animation3.start({
        opacity: 1,
        y: 0,
        transition : {
          delay: 0.1,
          duration: 1,
          type:"tween",
          stiffness:120,
          ease: 'easeInOut'
        }
      })

    }

    if(!inView){
      animation.start({
        opacity: 0,
        x: '-100vw',
        scale:0,
      })

      animation2.start({
        opacity: 0,
        x: '100vw'
      })

      animation3.start({
        opacity : 0,
        y: '-100vh',
      })
    }

  },[inView])

  return (
      <div className='info_container' id="myInfo" ref={ref}>
        <Container>
          <Row>
            <motion.h1
              animate={animation3}
            >GET TO KNOW ME!</motion.h1>
          </Row>
          <Row>
                <Col xs={12} md={7}>
                  <motion.div className='self_image'
                    animate={animation}
                  >
                      <img src={Picture}  alt=''/>
                  </motion.div>
                </Col>
                <Col xs={12} md={5}>
                  <motion.div className='information'
                    animate={animation2}
                  >
                    <h2>Let Me Introduce Myself</h2>
                    <p className='p1'>
                        My name is <span className='darkk'>BHARATH G</span>, and I currently work for <span className='darkk'>Cognizant Technology Solutions</span> in India as a <span className='darkk'>UI Developer</span>.
                    </p>
                    <p className='p2'>
                      As per my Academic background , I have completed my Bachelor's in Engineering under the specialization <span className='darkk'>
                      Electronics and Communication Engineering</span> from KPR Institute of Engineering and Technology located in India.
                    </p>
                    <Button size="small" variant="contained" className='button_wid'>
                      <li>
                        <HashLink smooth to="/about">MORE ABOUT ME</HashLink>
                      </li>
                    </Button>
  
                  </motion.div>
                </Col>
            </Row>
          </Container>
        </div>
  )};

export default MyInfo;

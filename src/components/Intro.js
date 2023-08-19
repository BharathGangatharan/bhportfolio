import React from 'react'
import "./Intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import KK from '../image/snap_g_sofa.png'
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {HashLink} from 'react-router-hash-link';
import resumePdf from '../pdf/resume_Bharath.pdf';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const useStyles = makeStyles((theme)=>({
  abs:{
      "&:hover":{
          fontSize:"35px"
      }
  },
  root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
}))

const Intro = () => {
    const textRef = useRef();
    const classes = useStyles();

    const {ref, inView} = useInView({
      threshold: 0.2
    });
    const animation = useAnimation();
    const animation2 = useAnimation();
    const animationButtonBall = useAnimation();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["UI Developer", "Designer","Programmer","Web Developer"],
      });
    }, []);

    useEffect(()=>{

      if(inView){
        animation.start({
          opacity: 1,
          x: 0,
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

        animationButtonBall.start({
          opacity: 1,
          y: [ 10, -10],
          transition : {
            delay: 1.5,
            duration: 1,
            yoyo: Infinity,
            ease: "easeOut",
          }
        })
      }

      if(!inView){
        animation.start({
          opacity: 0,
          x: '-100vw'
        })

        animation2.start({
          opacity: 0,
          x: '100vw'
        })

        animationButtonBall.start({
          opacity: 1,      
        })

      }

    },[inView])

  return (
      <div className="intro" id="home" ref={ref}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <motion.div className="left"              
                animate={animation}   
              >
                <div className="wrapper">
                    <h2>Hyy There, I'm</h2>
                    <h1>Bharath G</h1>
                    <h3 className='spanDynamic'>
                      <span ref={textRef}></span>
                    </h3>
                    <div className={classes.root} id="buton_variant">
                        <motion.Button animate={animationButtonBall} variant="contained" className='resumeButton'>
                          <a href={resumePdf} download>Resume</a>
                        </motion.Button>
                        <motion.Button animate={animationButtonBall} variant="contained" color="secondary" className='wButton'>
                        <li>
                          <HashLink smooth to="/#myProject">My Works</HashLink>
                        </li>
                        </motion.Button>
                    </div>
                  </div>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div className="right"
              animate={animation2} >
                <Tilt tiltMaxAngleX={30} 
        tiltMaxAngleY={30} perspective={1000} >
                  <div className="imgContainern">
                    <img src={KK} alt="" />
                  </div>
                </Tilt>
              </motion.div>
            </Col>
        </Row>
        </Container>
      </div>

  )
}

export default Intro
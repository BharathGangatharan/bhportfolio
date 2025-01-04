import React,{useEffect,useRef} from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ProgressBar.css';
import {HashLink} from 'react-router-hash-link';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';



const ProgressBar = () => {


  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();

  useEffect(()=>{

    if(inView){
      animation.start({
        opacity: 1,
          x: 0,
          transition : {
            delay: 0.5,
            duration: 1,
            type:"tween",
          },
      })

      animation2.start({
        opacity: 1,
          x: 0,
          transition : {
            delay: 0.9,
            duration: 1,
            type:"tween",
          }
      })

      animation3.start(i=>({
        opacity: 1,
        y: 0,
        transition : {
          delay: i * 0.4,
          duration: 1,
          type:"spring",
          stiffness:120,
          ease: 'easeInOut'
        }
      }))

      animation4.start({
        opacity: 1,
          x: 0,
          transition : {
            delay: 0.1,
            duration: 1,
            type:"tween",
          },
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

      animation3.start({
        opacity: 0,
        y: 100,
      })

      animation4.start({
        opacity: 1,
        x: '100vw'  
      })
    }

  },[inView])


  return (
    <div className='skills_container' id="mySkills" ref={ref}>
      <Container>
        <div className='fd'>
          <motion.h1 animate={animation4}>SKILLS</motion.h1>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <motion.div className="text-content" animate={animation}>
              <p>In order to benefit other members of the developer community, I also enjoy contributing 
                content that is linked to the knowledge I have acquired over the years in web development. 
                Please feel free to connect with me or follow me on <a href="https://www.linkedin.com/in/bharath-g/" target='_blank'>LinkedIn</a>, where I share relevant Web Development 
                and Programming stuff.
              </p>
              <p>
                I'm interested in employment possibilities where I can grow, learn, and contribute. 
                Please get in touch with me if you have a suitable opportunity that matches my qualifications and 
                expertise.
                <HashLink smooth to="/#myContact">CONTACT</HashLink>
              </p>
            </motion.div>
          </Col>
          <Col xs={12} md={6}>
          <motion.div className="content" animate={animation2}>
              <div className='skill_main_content'>
                <motion.span animate={animation3} custom={1}>HTML</motion.span>
                <motion.span animate={animation3} custom={2}>CSS</motion.span>
                <motion.span animate={animation3} custom={3}>BOOTSTRAP</motion.span>
                <motion.span animate={animation3} custom={4}>MATERIAL UI</motion.span>
                <motion.span animate={animation3} custom={5}>REACT BOOTSTRAP</motion.span>
                <motion.span animate={animation3} custom={6}>JAVASCRIPT</motion.span>
                <motion.span animate={animation3} custom={7}>JQUERY</motion.span>
                <motion.span animate={animation3} custom={8}>REACT</motion.span>
                <motion.span animate={animation3} custom={9}>REDUX</motion.span>
                <motion.span animate={animation3} custom={10}>ES5/ES6</motion.span>
                <motion.span animate={animation3} custom={11}>TYPESCRIPT</motion.span>
                <motion.span animate={animation3} custom={12}>AJAX</motion.span>
                <motion.span animate={animation3} custom={13}>WEB ACCESSIBILITY</motion.span>
                <motion.span animate={animation3} custom={14}>GIT</motion.span>
                <motion.span animate={animation3} custom={15}>JEST</motion.span>
                <motion.span animate={animation3} custom={16}>RESPONSIVE WEB DESIGN</motion.span>
          </div>
          </motion.div>
        </Col>
        </Row>
      </Container>
    </div> 

)};

export default ProgressBar;

import React, { useEffect, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './FooterNew.css';
import {HashLink} from 'react-router-hash-link';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';




const FooterNew = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animationli = useAnimation();
  const animation4 = useAnimation();

  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);


  useEffect(()=>{
    if(inView){
      animation.start({
        opacity: 1,
        x: 0,
        transition : {
            delay: 0.3,
            duration: 1,
            type:"spring",
        }
      })

      animation3.start({
        opacity: 1,
        x: 0,
        transition : {
            delay: 1.3,
            duration: 1.2,
            type:"spring",
        }
      })

      animation2.start(i=>({
        opacity: 1,
        y: 0,
        transition : {
          delay: i * 0.3,
          duration: 1.1,
          type:"tween",
          stiffness:120,
          ease: 'easeInOut'
        }
      }))

      animationli.start(i=>({
        opacity: 1,
        x: 0,
        transition : {
          delay: i * 0.5,
          duration: 1.2,
          type:"tween",
          stiffness:120,
          ease: 'easeInOut'
        }
      }))

      animation4.start({
        opacity: 1,
        y: [ 10, -10],
        transition : {
            delay: 1.2,
            duration: 1.2,
            yoyo: Infinity,
            ease: "easeOut",
        }
      })

    }

    if(!inView) {
      animation.start({
        opacity: 0,
        x: '-100vw',           
      })

      animation3.start({
        opacity: 0,
        x: '100vw',           
      })

      animation2.start({
        opacity: 0,
        y: 100,
      })


      animationli.start({
        opacity: 0,
        x: 100,
      })
      
      animation4.start({
        opacity: 0,
        y: -100,         
      })



    }

  },[inView])





  return (
    <div className='background footer' ref={ref}>
      <Container>
        <Row>
        <Col xs={12} md={4}>
            <motion.div className='FF__Container' animate={animation}>
              <div className='Main__Footer__Containerf'>
                  <div className="footer__col1">
                    <h1 className="footer__col1__title">Bharath G</h1>
                    <div className='Footer__Paraf'>
                      <a href="tel:9080945108"><CallIcon/></a> | <a href="mailto:bharathkarnan199@gmail.com"><MailIcon/></a>
                    </div>
                  </div>
              </div>
            </motion.div>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={6}>
              <ul>
                <motion.li className="nnav-item" animate={animation2} custom={1}>
                  <HashLink smooth to="/#home" onClick={handleClick}>Home</HashLink>
                </motion.li>
                <motion.li className="nnav-item" animate={animation2} custom={2}>
                  <HashLink smooth to="/#myInfo" onClick={handleClick}>About</HashLink>
                </motion.li>
                <motion.li className="nnav-item" animate={animation2} custom={3}>
                  <HashLink smooth to="/#mySkills"  onClick={handleClick}>Skills</HashLink>
                </motion.li>
                <motion.li className="nnav-item" animate={animation2} custom={4}>
                  <HashLink smooth to="/#myProject" onClick={handleClick}>Projects</HashLink>
                </motion.li>
                <motion.li className="nnav-item" animate={animation2} custom={5}>
                  <HashLink smooth to="/#myContact" onClick={handleClick}>Contact</HashLink>
                </motion.li>
              </ul>
            </Col>
            
            <Col xs={12} md={6}>
              <motion.div className="socialMediaLink" animate={animation3}>
                  <ul>
                    <motion.li animate={animationli} custom={1}><a href="https://www.linkedin.com/in/bharath-g-351084183/" target="_blank"><LinkedInIcon/></a></motion.li>
                    <motion.li animate={animationli} custom={2}><a href="https://www.instagram.com/_default_one_/" target="_blank"><InstagramIcon/></a></motion.li>
                    <motion.li animate={animationli} custom={3}><a href="https://www.facebook.com/profile.php?id=100023690471466" target="_blank"><FacebookIcon/></a></motion.li>
                    <motion.li animate={animationli} custom={4}><a href="https://github.com/BharathGangatharan" target="_blank"><GitHubIcon/></a></motion.li>
                  </ul>
              </motion.div>
          </Col>
          </Row>
        </Col>
        <motion.div animate={animation4} className="footer_bottom">
          <div className='Footer__Paraf2'>
              &copy;Copyright 2023 | Made By Bharath<FavoriteIcon/>
          </div>
        </motion.div>
      </Row>
      </Container>
    </div>

  )
}

export default FooterNew
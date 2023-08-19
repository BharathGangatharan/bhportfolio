import React,{useEffect} from 'react';
import Pic from '../image/left_view.jpg';
import './Biography.css'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Done from '@material-ui/icons/Done';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const Biography = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    const animation6 = useAnimation();


    useEffect(()=>{

        if(inView){
            animation.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.2,
                    duration: 1,
                    type:"spring",
                }
            })

            animation1.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.5,
                    duration: 1,
                    type:"tween",
                }
            })

            animation2.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.8,
                    duration: 1,
                    type:"tween",
                }
            })


            animation3.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 1,
                    duration: 1,
                    type:"tween",
                }
            })

            animation4.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 1.3,
                    duration: 1,
                    type:"tween",
                }
            })

            animation5.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 2,
                    duration: 1,
                    type:"spring",
                }
            })

            animation6.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 1.5,
                    duration: 1,
                    type:"tween",
                }
            })


        }

        if(!inView){
            animation.start({
                opacity: 0,
                x: '-100vw',           
            })
            animation2.start({
                opacity: 0,
                x: '-100vw',           
            })
            animation3.start({
                opacity: 0,
                x: '-100vw',           
            })

            animation4.start({
                opacity: 0,
                x: '-100vw',           
            })

            animation5.start({
                opacity: 0,
                x: '-100vw',           
            })

            animation6.start({
                opacity: 0,
                x: '100vw',           
            })
        }

    },[inView])

  return (
    <div className='bio_Container'>
        <Container>
            <Row>
                <Col sm={12} md={8}>
                    <div className='my_bio' ref={ref}>
                        <motion.div className='my_bio_h' animate={animation}>
                            <h1>A Few Words About Me</h1><EmojiEmotionsIcon className="emoji" style={{ color: "yellow" }}/>
                        </motion.div>
                        <motion.p className='my_bio_p' animate={animation2}>                       
                            <span className='about_p_dark'>Front-end developer</span> has always been my dream job.So, in the hopes of one day living my dream life, 
                            I pursued my academic and skill interests. 
                        </motion.p>
                        <motion.p className='my_bio_p' animate={animation3}>
                            Now, I currently work as a professional user interface developer on various projects by creating <span className='about_p_dark'>web design and development</span>. 
                            In my spare time, I enjoy utilizing Figma to build <span className='about_p_dark'>user interface designs</span>, playing volley ball, Android apps, and 
                            solving Rubik's Cubes. 
                        </motion.p>
                        <motion.p className='my_bio_p' animate={animation4}>
                            I am keen in developing myself for both my own benefit and a better career.
                        </motion.p>

                        <motion.h2 className="bgquotes" animate={animation5}>
                            <i>DREAM IT,&nbsp;&nbsp;WISH IT,&nbsp;&nbsp;DO IT <Done className="tick"/></i>
                        </motion.h2>

                    </div>
                </Col>
            
                <Col sm={12} md={4}>
                    <motion.div className='my_bio_pic' animate={animation6}>
                        <img src={Pic} alt="" />
                    </motion.div>
                </Col>
        </Row>
        </Container>
    </div>
  )};

export default Biography;

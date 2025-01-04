import React, { useEffect } from 'react';
import CTS from '../image/cts.png';
import EY from "../image/EY_logo.jpeg";
import './Experience.css'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Experience = () => {

  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {

      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3,
          duration: 1,
          type: "spring",
        }
      })
      animation2.start({
        opacity: 1,
        x: 0,
        scale: [0.3, 1.2, 1],
        transition: {
          delay: 0.6,
          duration: 1,
          type: "spring",
        }
      })

    }

    if (!inView) {
      animation.start({
        opacity: 0,
        y: 100,
      })

      animation2.start({
        opacity: 0,
        x: '100vw',
      })
    }


  }, [inView])


  return (

    <div className='exp' ref={ref}>
      <motion.h2 animate={animation}>EXPERIENCE</motion.h2>
      <motion.div className='exp_cont' animate={animation2}>
        <div className='exp_img'>
          <img src={EY} alt="" />
        </div>
        <div className='exp_p'>
          Since September 2024, I have been working as a Technical Lead at EY, specializing in frontend development. 
          In this role, I independently design, develop, and optimize websites to enhance performance, scalability, and user experience. 
          I take ownership of the end-to-end development process, including requirement analysis, implementation, and delivery, while ensuring adherence to best practices and industry standards.
        </div>
      </motion.div>
      <motion.div className='exp_cont' animate={animation2}>
        <div className='exp_img'>
          <img src={CTS} alt="" />
        </div>
        <div className='exp_p'>
          In August 2021, I started working for this lovely organization, where the team members are
          all incredibly helpful and supportive. I have been offered a fantastic opportunity by this organization
          to study and work with <span>React Js</span>, because I have some solid <span>Javascript</span> experience.
          The ability to speak with clients directly and carry out my work in accordance with their objectives and needs is
          another benefit I received from this organization.
        </div>
      </motion.div>
    </div>

  )
}

export default Experience;

import React,{useEffect} from 'react';
import './Languages.css'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const Languages = () => {

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
        transition : {
            delay: 0.5,
            duration: 1,
            type:"spring",
        }
      })

      animation2.start({
        opacity: 1,
        y: 0,
        scale:[0.5,1.2,1],
        transition : {
            delay: 0.7,
            duration: 1,
            type:"tween",
        }
      })

      animation3.start({
        opacity: 1,
        y: 0,
        scale:[0.5,1.2,1],
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
        x: '100vw',           
      })

      animation2.start({
        opacity: 0,
        y: 100,           
      })

      animation3.start({
        opacity: 0,
        y: 100,           
      })
    }

  },[inView])

  return (
  <div className='lang_cont' ref={ref}>
      <motion.div className='spk_cont' animate={animation}>
        <h1>Languages</h1>
        <h2>I Can Speak</h2>
      </motion.div>
    <div className='langs'>
        <motion.div className='div1' animate={animation2}>
            <h1>E</h1>
            <h2>ENGLISH</h2>
            <p>Full Professional Proficiency</p>
        </motion.div>
        <motion.div className='div1' animate={animation3}>
            <h1>T</h1>
            <h2>TAMIL</h2>
            <p>Native or Bilingual Proficiency</p>
        </motion.div>
    </div>
  </div>
  )};

export default Languages;

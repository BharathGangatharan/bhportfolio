import {useEffect} from 'react';
import './ProjectDes.css';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
 
 const ProjectDescLang = (props)=>{

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    const animation6 = useAnimation();


    useEffect(() => {

        if(inView){
            animation3.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.3,
                    duration: 1,
                    type:"tween",
                }
            })

            animation4.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 0.6,
                    duration: 1,
                    type:"spring",
                }
            })

            animation5.start(i => ({
                opacity: 1,
                y: 0,
                transition : {
                    delay: i*0.8,
                    duration: 0.5,
                    type:"spring",
                }
            }))

            animation6.start({
                opacity: 1,
                x: 0,
                transition : {
                    delay: 1.5,
                    duration: 1,
                    type:"spring",
                }
            })
        }

        if(!inView){
            animation3.start({
                opacity: 0,
                x: '100vw',           
            })

            animation4.start({
                opacity: 0,
                x: '-100vw',           
            })

            animation5.start({
                opacity: 0,
                y: 100,           
            })

            animation6.start({
                opacity: 0,
                x: '100vw',        
            })

        }

    }, [inView])

     return (

        <div className="prj_desc" ref={ref}>
            <motion.div animate={animation3} className="prj_overview">
                <h2>OVERVIEW</h2>
                <p>{props.itm.content}</p>
            </motion.div>
            <motion.div className="prj_languages">
                <motion.h2 animate={animation4}>LANGUAGES USED</motion.h2>
                {
                    props.itm.languages.map((lang,i)=><motion.span whileHover={{ scale: 1.1}} custom={i} animate={animation5}>{lang}</motion.span>)
                }
            </motion.div>
            <motion.div className="prj_bottom" animate={animation6}>
                <h2>SEE LIVE</h2>
                <motion.a whileHover={{ scale: 1.2}} href={props.itm.live} target="_blank">SEE DEMO</motion.a>
                <motion.a whileHover={{ scale: 1.2}} href="/">GO BACK</motion.a>
            </motion.div>
        </div>
     )
 }

 export default ProjectDescLang;
import {useEffect} from 'react';
import {ProjectData} from '../datas/ProjectData.js';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import ProjectDescLang from './ProjectDescLang'
import './ProjectDes.css';

 const ProjectDesc = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();

    const {id} = useParams();


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

            animation1.start({
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
                transition : {
                    delay: 0.7,
                    duration: 1.2,
                    type:"tween",
                }
            })

        }

        if(!inView) {
            animation.start({
              opacity: 0,
              x: '-100vw',           
            })

            animation1.start({
                opacity: 0,
                x: '100vw',           
            })

            animation2.start({
                opacity: 0,
                y: 100,           
            })
        }


    },[inView])




    return(
        <div className="project_Desc_container">
                <Container fluid>
                    <Row>

                            {
                                ProjectData.filter((filItem)=>{return filItem.id === id}).map((itm) =>{
                                    return (
                                        <div className="content">
                                            <div className="topContent"  ref={ref}>
                                                <div className="mini_info">
                                                    <motion.h1 animate={animation}>{itm.title}</motion.h1>
                                                    <motion.p animate={animation1}>
                                                        This page contains the case study of {itm.title} Open-Source Project which includes the Project Overview, Tools Used and Live Links to the live site.
                                                    </motion.p>
                                                    <motion.a animate={animation2} href={itm.gitlink} target="_blank" whileHover={{ scale: 1.2}} >
                                                        SOURCE CODE
                                                    </motion.a>
                                                </div>
                                            </div>
                                            <Container>
                                                <ProjectDescLang itm={itm} />
                                            </Container>
                                        </div>
                                    )
                                })
                            }
                
                    </Row>
                </Container>
        </div>
    )
 }
 export default ProjectDesc;
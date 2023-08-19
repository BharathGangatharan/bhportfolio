import React,{ useEffect} from 'react';
import "./ProjectWork.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ProjectData } from "../datas/ProjectData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';



const ProjectWork = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();
  const animation2 = useAnimation();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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

      animation2.start({
        opacity: 1,
        x: 0,
        transition : {
          delay: 1,
          duration: 1,
          type:"spring",
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
    }

  },[inView])

  return (
    <div className="projectContianer" id="myProject" ref={ref}>
      <Container>
        <Row>
          <div className="projectHead">
            <motion.h1 animate={animation}> PROJECTS </motion.h1>
          </div>
          <motion.div className="work" animate={animation2}>
            <Slider {...settings}>
              {
                ProjectData.map((eachItm) => {
                  return(
                    <motion.div className="workCards" key={eachItm.id}>
                      <img src={eachItm.img} className="p1img" alt="" />
                        <button className="workButton">
                          <span className="button_text">
                            <Link to={`project/${eachItm.id}`}>{eachItm.title}</Link>
                          </span>
                          <span className="button_icon"><ArrowForwardIosIcon /></span>
                        </button>
                    </motion.div>
                  )
                })
              }
            </Slider>
          </motion.div>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectWork;

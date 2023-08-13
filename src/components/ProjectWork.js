import React from "react";
import "./ProjectWork.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ProjectData } from "../datas/ProjectData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectWork = () => {

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

  return (
    <div className="projectContianer" id="myProject">
      <Container>
        <Row>
          <div className="projectHead">
            <h1> PROJECTS </h1>
          </div>
          <div className="work">
            <Slider {...settings}>
              {
                ProjectData.map((eachItm) => {
                  return(
                    <div className="workCards">
                      <img src={eachItm.img} className="p1img" alt="" />
                        <button className="workButton">
                          <span className="button_text">
                            <Link to={`project/${eachItm.id}`}>{eachItm.title}</Link>
                          </span>
                          <span className="button_icon"><ArrowForwardIosIcon /></span>
                        </button>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectWork;

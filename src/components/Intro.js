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

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["UI Developer", "Designer","Programmer","Web Developer"],
      });
    }, []);

  return (
      <div className="intro" id="home">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="left">
                <div className="wrapper">
                    <h2>Hyy There, I'm</h2>
                    <h1>Bharath G</h1>
                    <h3 className='spanDynamic'>
                      <span ref={textRef}></span>
                    </h3>
                    <div className={classes.root} id="buton_variant">
                        <Button  variant="contained" className='resumeButton'>
                          <a href={resumePdf} download>Resume</a>
                        </Button>
                        <Button  variant="contained" color="secondary" className='wButton'>
                        <li>
                          <HashLink smooth to="/#myProject">My Works</HashLink>
                        </li>
                        </Button>
                    </div>
                  </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="right">
                <div className="imgContainern">
                  <img src={KK} alt="" />
                </div>
              </div>
            </Col>
        </Row>
        </Container>
      </div>

  )
}

export default Intro
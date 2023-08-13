import React, { useState } from "react";
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './FooterNew.css';

const FooterNew = () => {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  return (
    <div className='background footer'>
      <Container>
        <Row>
        <Col xs={12} md={4}>
          <div className='FF__Container'>
              <div className='Main__Footer__Containerf'>
                  <div className="footer__col1">
                    <h1 className="footer__col1__title">Bharath G</h1>
                    <div className='Footer__Paraf'>
                      <a href="tel:9080945108"><CallIcon/></a> | <a href="mailto:bharathkarnan199@gmail.com"><MailIcon/></a>
                    </div>
                  </div>
              </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={6}>
              <ul>
                <li className="nnav-item">
                  <Link activeClass="active" to="home" smooth={true} offset={0} duration={10} onClick={handleClick}>Home</Link>
                </li>
                <li className="nnav-item">
                  <Link activeClass="active" to="myInfo" smooth={true} offset={-85} duration={10} onClick={handleClick}>About</Link>
                </li>
                <li className="nnav-item">
                  <Link activeClass="active" to="mySkills" smooth={true} offset={-85} duration={10} onClick={handleClick}>Skills</Link>
                </li>
                <li className="nnav-item">
                  <Link activeClass="active" to="myProject" smooth={true} offset={-85} duration={10} onClick={handleClick}>Projects</Link>
                </li>
                <li className="nnav-item">
                  <Link activeClass="active" to="myContact" smooth={true} offset={-85} duration={10} onClick={handleClick}>Contact</Link>
                </li>
              </ul>
            </Col>
            
            <Col xs={12} md={6}>
              <div className="socialMediaLink">
                  <ul>
                    <li><a href=""><LinkedInIcon/></a></li>
                    <li><a href=""><InstagramIcon/></a></li>
                    <li><a href=""><FacebookIcon/></a></li>
                    <li><a href=""><GitHubIcon/></a></li>
                  </ul>
              </div>
          </Col>
          </Row>
        </Col>
        <div className="footer_bottom">
          <div className='Footer__Paraf2'>
              &copy;Copyright 2023 | Made By Bharath<FavoriteIcon/>
          </div>
        </div>
      </Row>
      </Container>
    </div>

  )
}

export default FooterNew
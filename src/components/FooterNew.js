import React, { useState } from "react";
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
              <HashLink smooth to="/#home" onClick={handleClick}>Home</HashLink>
            </li>
            <li className="nnav-item">
              <HashLink smooth to="/#myInfo" onClick={handleClick}>About</HashLink>
            </li>
            <li className="nnav-item">
              <HashLink smooth to="/#mySkills"  onClick={handleClick}>Skills</HashLink>
            </li>
            <li className="nnav-item">
              <HashLink smooth to="/#myProject" onClick={handleClick}>Projects</HashLink>
            </li>
            <li className="nnav-item">
              <HashLink smooth to="/#myContact" onClick={handleClick}>Contact</HashLink>
            </li>
              </ul>
            </Col>
            
            <Col xs={12} md={6}>
              <div className="socialMediaLink">
                  <ul>
                    <li><a href="https://www.linkedin.com/in/bharath-g-351084183/" target="_blank"><LinkedInIcon/></a></li>
                    <li><a href="https://www.instagram.com/_default_one_/" target="_blank"><InstagramIcon/></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100023690471466" target="_blank"><FacebookIcon/></a></li>
                    <li><a href="https://github.com/BharathGangatharan" target="_blank"><GitHubIcon/></a></li>
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
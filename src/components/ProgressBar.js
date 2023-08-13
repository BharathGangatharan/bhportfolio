import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ProgressBar.css';
import {HashLink} from 'react-router-hash-link';



const ProgressBar = () => {

  return (
    <div className='skills_container' id="mySkills">
      <Container>
        <div className='fd'>
          <h1>SKILLS</h1>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className="text-content">
              <p>In order to benefit other members of the developer community, I also enjoy contributing 
                content that is linked to the knowledge I have acquired over the years in web development. 
                Please feel free to connect with me or follow me on <a href="https://www.linkedin.com/in/bharath-g-351084183/" target='_blank'>LinkedIn</a>, where I share relevant Web Development 
                and Programming stuff.
              </p>
              <p>
                I'm interested in employment possibilities where I can grow, learn, and contribute. 
                Please get in touch with me if you have a suitable opportunity that matches my qualifications and 
                expertise.
                <HashLink smooth to="/#myContact">CONTACT</HashLink>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
          <div className="content">
              <div className='skill_main_content'>
                <span>HTML</span>
                <span>CSS</span>
                <span>BOOTSTRAP</span>
                <span>MATERIAL UI</span>
                <span>REACT BOOTSTRAP</span>
                <span>JAVASCRIPT</span>
                <span>JQUERY</span>
                <span>REACT</span>
                <span>REDUX</span>
                <span>ES5/ES6</span>
                <span>AJAX</span>
                <span>WEB ACCESSIBILITY</span>
                <span>GIT</span>
                <span>RESPONSIVE WEB DESIGN</span>
          </div>
          </div>
        </Col>
        </Row>
      </Container>
    </div> 

)};

export default ProgressBar;

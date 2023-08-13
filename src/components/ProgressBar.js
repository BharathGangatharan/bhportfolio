import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ProgressBar.css';


const ProgressBar = () => {

  return (
    <div className='skills_container' id="mySkills">
      <Container>
        <div className='fd'>
          <h1>SKILLS</h1>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className="img-content">

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

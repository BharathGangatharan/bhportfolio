import React from 'react';
import './MyInfo.css';
import Picture from '../image/bharath2.jpg'
import Button from '@material-ui/core/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {HashLink} from 'react-router-hash-link';

const MyInfo = ({ref}) => {
  return (
      <div className='info_container' id="myInfo" ref={ref}>
        <Container>
          <Row>
            <h1>GET TO KNOW ME!</h1>
          </Row>
          <Row>
                <Col xs={12} md={7}>
                  <div className='self_image'>
                      <img src={Picture}  alt=''/>
                  </div>
                </Col>
                <Col xs={12} md={5}>
                  <div className='information'>
                    <h2>Let Me Introduce Myself</h2>
                    <p className='p1'>
                        My name is <span className='darkk'>BHARATH G</span>, and I currently work for <span className='darkk'>Cognizant Technology Solutions</span> in India as a <span className='darkk'>UI Developer</span>.
                    </p>
                    <p className='p2'>
                      As per my Academic background , I have completed my Bachelor's in Engineering under the specialization <span className='darkk'>
                      Electronics and Communication Engineering</span> from KPR Institute of Engineering and Technology located in India.
                    </p>
                    <Button size="small" variant="contained"  className='button_wid'>
                      <li>
                        <HashLink smooth to="/about">MORE ABOUT ME</HashLink>
                      </li>
                    </Button>
  
                  </div>
                </Col>
            </Row>
          </Container>
        </div>
  )};

export default MyInfo;

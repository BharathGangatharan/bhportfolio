import React from 'react';
import Pic from '../image/left_view.jpg';
import './Biography.css'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Done from '@material-ui/icons/Done';

const Biography = () => {
  return (
    <div className='bio_Container'>
        <Container>
            <Row>
                <Col sm={12} md={8}>
                    <div className='my_bio'>
                        <div className='my_bio_h'>
                            <h1>A Few Words About Me</h1><EmojiEmotionsIcon style={{ color: "yellow" }}/>
                        </div>
                        <p className='my_bio_p'>                       
                            <span className='about_p_dark'>Front-end developer</span> has always been my dream job.So, in the hopes of one day living my dream life, 
                            I pursued my academic and skill interests. 
                        </p>
                        <p className='my_bio_p'>
                            Now, I currently work as a professional user interface developer on various projects by creating <span className='about_p_dark'>web design and development</span>. 
                            In my spare time, I enjoy utilizing Figma to build <span className='about_p_dark'>user interface designs</span>, playing volley ball, Android apps, and 
                            solving Rubik's Cubes. 
                        </p>
                        <p className='my_bio_p'>
                            I am keen in developing myself for both my own benefit and a better career.
                        </p>

                        <h2 className="bgquotes">
                            <i>DREAM IT,&nbsp;&nbsp;WISH IT,&nbsp;&nbsp;DO IT <Done className="tick"/></i>
                        </h2>

                    </div>
                </Col>
            
                <Col sm={12} md={4}>
                    <div className='my_bio_pic'>
                        <img src={Pic} alt="" />
                    </div>
                </Col>
        </Row>
        </Container>
    </div>
  )};

export default Biography;

import React from 'react';
import CTS from '../image/cts.png'
import './Experience.css'

const Experience = () => {
  return (

      <div className='exp'>
            <h2>EXPERIENCE</h2>
          <div className='exp_cont'>
            <div className='exp_img'>
                <img src={CTS} alt="" />
            </div>
            <div className='exp_p'>
                In August 2021, I started working for this lovely organization, where the team members are 
                all incredibly helpful and supportive. I have been offered a fantastic opportunity by this organization 
                to study and work with <span>React Js</span>, because I have some solid <span>Javascript</span> experience. 
                The ability to speak with clients directly and carry out my work in accordance with their objectives and needs is 
                another benefit I received from this organization.
            </div>
        </div>
    </div>

  )}

export default Experience;

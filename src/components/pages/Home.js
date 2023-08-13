import React from "react";
import MyInfo from '../MyInfo';
import ProgressBar from '../ProgressBar';
import ProjectWork from '../ProjectWork';
import ContactUs from '../ContactUs';
import Intro from '../Intro';


// import ParticleBackground from './Particles/ParticleBackground';

// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import EmailIcon from '@material-ui/icons/Email';


const Home = () => {

    return(
    
         <div>
            <Intro/>
            <MyInfo/>
            <ProgressBar/>
            <ProjectWork/>
            <ContactUs/>
        </div>    
)};

export default Home;

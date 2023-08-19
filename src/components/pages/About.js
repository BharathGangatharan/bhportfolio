import React from 'react';
import Biography from '../Biography';
import Experience from '../Experience';
import Languages from '../Languages';
import LineChart from '../LineChart';
import { motion } from "framer-motion";

const About = () => {
  return (
  <React.Fragment>
      <Biography/>
      <Languages/>
      <LineChart/>
      <Experience/>
  </React.Fragment>
  )};

export default About;

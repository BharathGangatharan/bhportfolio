import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LOGO from '../image/logo_cropped.png';
import {HashLink} from 'react-router-hash-link';
import { motion } from "framer-motion";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./Navbar.css";


const ulListVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const navItmVariants = {
  hidden : {
    opacity : 0,
    y: '-100vh'
  },

  visible : i =>  ({
    opacity: 1,
    y: 0,
    transition : {
      delay: i * 0.3,
      duration: 1.3,
      type:"tween",
      stiffness:120,
      ease: 'easeInOut'
    }
  })
}

const logoVariants = {
  visible: {
    rotate: 360,
    transition : {
      delay: 0.3,
      duration: 1,
      type:"tween",
      stiffness:120,
      ease: 'easeInOut'
    }
  }
}

function NewNavbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="nnavbar">
        <div className="nnav-container">
          <motion.NavLink to="/" className="nnav-logo"
            variants={logoVariants}
            animate="visible"  
          >
            <img src={LOGO} alt='' 
            />
          </motion.NavLink>

          <ul className={click ? "nnav-menu active" : "nnav-menu"}
              variants={ulListVariants}
              initial="hidden"
              animate="visible"          
          >

            <motion.li className="nnav-item"
              variants={navItmVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              whileHover={{ scale: 1.2 }}
            >
              <HashLink smooth to="/" onClick={handleClick}>Home</HashLink>
            </motion.li>
            <motion.li className="nnav-item"
              variants={navItmVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              whileHover={{ scale: 1.2 }}
            >
              <HashLink smooth to="/#myInfo" onClick={handleClick}>About</HashLink>
            </motion.li>
            <motion.li className="nnav-item"
              variants={navItmVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              whileHover={{ scale: 1.2 }}
            >
              <HashLink smooth to="/#mySkills"  onClick={handleClick}>Skills</HashLink>
            </motion.li>
            <motion.li className="nnav-item"
              variants={navItmVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              whileHover={{ scale: 1.2 }}
            >
              <HashLink smooth to="/#myProject" onClick={handleClick}>Projects</HashLink>
            </motion.li>
            <motion.li className="nnav-item"
              variants={navItmVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              whileHover={{ scale: 1.2 }}
            
            >
              <HashLink smooth to="/#myContact" onClick={handleClick}>Contact</HashLink>
            </motion.li>
          </ul>
          <div className="nnav-icon" onClick={handleClick}>
             {click ? <CloseIcon/> :<MenuIcon/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NewNavbar;


























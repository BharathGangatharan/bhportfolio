import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LOGO from '../image/logo_cropped.png';
import {HashLink} from 'react-router-hash-link';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./Navbar.css";

function NewNavbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="nnavbar">
        <div className="nnav-container">
          <NavLink to="/" className="nnav-logo">
            <img src={LOGO} alt=''/>
          </NavLink>

          <ul className={click ? "nnav-menu active" : "nnav-menu"}>

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
          <div className="nnav-icon" onClick={handleClick}>
             {click ? <CloseIcon/> :<MenuIcon/>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NewNavbar;


























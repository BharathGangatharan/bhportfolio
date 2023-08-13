import React,{useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ScrollTop from "./components/pages/ScrollTop";
import Footer from "./components/FooterNew";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDesc from "./components/ProjectDesc";
import Preloader from "./components/Preloader";

function App() {

  const [isLoading, setIsloading] = useState(true);

  useEffect(()=>{
    setTimeout(function(){
      setIsloading(false)
    },3700)
  },[])

  return (

    <>
        {
      isLoading ? < Preloader/> :  (
        <div className="app">
          <Router>
            <Navbar/>
            <ScrollTop />
            <ScrollToTop />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDesc />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )
    }
    </>
  );
}

export default App;

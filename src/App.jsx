 
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
 
 
import Services from "./components/Services";
// import Footer from "./components/Footer";
 

function App() {
  


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
           
          
           
          <Route path="/contact" element={<Contact />} />
           
        </Routes>
       {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
import React from 'react'
import Contact from "../components/contact/Contact";
import Home from  "../components/home/Home"
import Projects from "../components/projects/Projects"
import Skills from "../components/skills/Skills"
import Footer from './Footer/Footer';


const component = (props) => {
  return (
    <div className="containerr">

        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

        
    </div>
  )
}

export default component
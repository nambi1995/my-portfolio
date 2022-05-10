import React from 'react'
import './body.css'
import About from './about/index.js'
import Projects from './projects/index.js'
import Skills from './skills/index.js'
import Work from './work/index.js'
import Contact from './contact/index'
function Body() {
  return <div className="body">
    <section id="about">
        <About></About>
    </section>
    <section id="projects">
        <Projects></Projects>
    </section>
    <section id="skills">
        <Skills></Skills>
    </section>
    <section id="work">
        <Work></Work>
    </section>
    <section id="contacts">
        <Contact></Contact>
    </section>
    
  </div>;
}

export default Body
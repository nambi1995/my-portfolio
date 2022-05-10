import React from 'react'
import SocialContact from '../../common/social-contact';
import './about.css'
import ProgrammingBro from './Programmingbro.png'

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I am <br />
          <span className="info-name">Nambi Rajan</span>.
          <br /> I love learning Web.
        </div>
        <div className="about-photo">
          <img src={ProgrammingBro}  className='picture'/>
        </div>
      </div>
      <SocialContact/>
      <div className="about-button">Contacts</div>
    </div>
  );
}

export default About
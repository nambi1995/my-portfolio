import React from 'react'
import { SocialData } from '../../../data/social'
import './social-contact.css'

function SocialContact() {
    const data = SocialData;
  return (
    <div className='social-contact'>{data.map((item)=>{
        return (
          <div>
          <a href={item.link}>
           
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
          {/* <img src={require('../../../assets/icons/instagram.png')} className="social-icon" />
            */}
            </div>
          </a>
          </div>
        );
    })}</div>
  )
}

export default SocialContact
import React, { useState } from "react";
import "./header.css";
import Web from "./web/Web"
import Mobile from "./mobile/Mobile"

function Header() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="header">
      <div className="logo">Header Component</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-apps"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}></Mobile>}
        </div>
      </div>
    </div>
  );
}

export default Header;

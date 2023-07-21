import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="name">
        <p>Genesis Mendes</p>
        
      </div>
      <div>
        <a href="https://github.com/GenesisM8">
            <img className="git" alt="github icon" src="https://be-leaf.s3.amazonaws.com/github-icon.png"></img>
        </a>
        
      </div>
    </div>
  );
}

export default Footer;

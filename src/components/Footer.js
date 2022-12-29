import React from 'react';
import ".//footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/JeanCSinisterra" target="_blank" rel="noopener noreferrer" className="github">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.twitter.com/JeanCSinisterra" target="_blank" rel="noopener noreferrer" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/jean-carlo-sinisterra/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

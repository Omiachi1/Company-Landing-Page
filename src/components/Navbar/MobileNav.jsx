import React, { useState } from 'react';
import { Menu, X } from "lucide-react";  
import logo from '../../assets/logo.png';
import './MobileNav.css'; 

const MobileNav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
        <div className="mobile-navbar-logo">
          <img className="mobile-navbar-logo-img" src={logo} alt="Logo" />
          <span className="mobile-navbar-logo-text">VirtualR</span>
        </div>

        <div className="mobile-navbar-toggle" onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X/> : <Menu/>}
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="mobile-navbar-drawer">
          <ul className="mobile-navbar-links">
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#workflow">Workflow</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
            </ul>
          </ul>
          <div className="mobile-navbar-actions">
            <a href="#" className="mobile-sign-in">
              Sign In
            </a>
            
            <a href="#" className="mobile-sign-up">
              Create an account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;

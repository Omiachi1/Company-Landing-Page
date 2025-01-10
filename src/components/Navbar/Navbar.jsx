import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt="Logo" className='logo-img'/>
                <p>VirtualR</p>
            </div>
        
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#workflow">Workflow</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
            </ul>
            <div className='nav-btn'>
                <div className='sign-btn'>
                    <button>Sign In</button>
                </div>
                <div className='create-btn'>
                    <button>Create an account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

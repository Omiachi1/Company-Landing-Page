import React from 'react';
import './Footer.css';
import { resourcesLinks } from '../../constants';
import { platformLinks } from '../../constants';
import { communityLinks } from '../../constants';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-links'>
            <div className="resources">
                <h4>Resources</h4>
                <ul>
                    {resourcesLinks.map((link, indedx) => {
                        return (
                            <li key={indedx}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="platform">
                <h4>Platform</h4>
                <ul>
                    {platformLinks.map((link, indedx) => {
                        return (
                            <li key={indedx}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="community">
                <h4>Community</h4>
                <ul>
                    {communityLinks.map((link, indedx) => {
                        return (
                            <li key={indedx}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    

      
    </div>
  )
}

export default Footer

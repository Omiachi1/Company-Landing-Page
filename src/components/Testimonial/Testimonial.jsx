import React from 'react';
import './Testimonial.css';
import { testimonials } from '../../constants';


const Testimonial = () => {
  return (
    <div className='testimonial' id='testimonial'>
      <h1>What People are saying</h1>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => {
            return (
                <div key={index} className="testimony">
                    <div className='testimony-text'><p>{testimonial.text}</p></div>
                    <div className='user-details'>
                        <img src={testimonial.image}/>
                        <div className='user-details-text'>
                            <h6>{testimonial.user}</h6>
                            <p>{testimonial.company}</p>
                        </div>
                    </div>
                </div>
            );
        })}
        
      </div>
    </div>
  );
}

export default Testimonial

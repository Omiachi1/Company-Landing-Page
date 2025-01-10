import React from 'react';
import './Pricing.css';
import { pricingOptions } from '../../constants';
import { CircleCheck } from 'lucide-react';

const Pricing = () => {
  return (
    <div className='pricing' id='pricing'>
        <h1>Pricing</h1>
        <div className='services'>
            {pricingOptions.map((option, index) => {
                const isProPlan = index === 1;
                return (
                    <div key={index} className={`services-contents ${isProPlan ? 'pro-plan' : ''}`}>
                        <p className='title'>
                            {option.title}
                            {isProPlan && <span>(Most Popular)</span>}
                        </p>
                        <p className='price'>{option.price} <span>/Month</span></p>
                        <div className='service-list'>
                        {option.features.map((feature, index) => {
                            return (
                            <div key={index} className='service-item'>
                                <i><CircleCheck/></i>
                                <p>{feature}</p>
                            </div>
                );
            })}
                        </div>
                        <button>Subscribe</button>
                    </div>
    );
    
  })}
        </div>
    </div>
  )
}

export default Pricing;

import React from 'react'
import './Feature.css'
import { features} from '../../constants'

const Feature = () => {
  return (
    <div className='feature' id='features'>
      <div className="feature-heading">
        <h4>FEATURE</h4>
      </div>
      <div className='sub-heading'>
        <h1>Easily build <span>your code</span></h1>
      </div>
      <div className='feature-items'>
        {features.map((feature, index) => {
          return (
            <div className='feature-div'>
                <div className='icon'>{feature.icon}</div>
                <div className='feature-content'>
                    <h3 className='ftr-heading'>{feature.heading}</h3>
                    <p className='ftr-text'>{feature.text}</p>
                </div>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}

export default Feature

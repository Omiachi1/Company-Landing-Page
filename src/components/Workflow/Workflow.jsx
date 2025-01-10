import React from 'react';
import './Workflow.css';
import { CircleCheck } from 'lucide-react';
import code from '../../assets/code.jpg';
import { checklistItems } from '../../constants/index.jsx';

const Workflow = () => {
  return (
    <div className='workflow' id='workflow'>
      <h1>Accelerate your <span>coding workflow.</span></h1>
      <div className='workflow-content'>
        <img src={code}/>
        <div className='checklist'>
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className='checklist-items'>
                <i><CircleCheck/></i>
                <div className="checklist-content">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div> 
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Workflow



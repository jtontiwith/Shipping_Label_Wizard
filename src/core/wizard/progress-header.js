import React from 'react';
import './progress-header.css';

const ProgressHeader = (props) => {
  const { currentStep } = props;
  return (
  <div className='progress-bar-shadow'>
    <div className={`progress-bar step-${currentStep}`}></div>
  </div>
  )
}

export default ProgressHeader;
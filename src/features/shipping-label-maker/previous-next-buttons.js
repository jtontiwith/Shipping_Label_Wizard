import React from 'react';
import './wizard.css';

const PrevoiusNextButtons = (props) => {
  const { onAction, currentStep } = props; 
  if(currentStep === 0) {
    return <div className="prev-next-btns"><button onClick={onAction}>Next</button></div>
  } else if (currentStep === 4) {
    return ( 
      <div className="prev-next-btns">
        <button onClick={onAction}>Previous</button>
        <button>confirm</button>
      </div>
    )
  } else {
    return (
      <div className="prev-next-btns">
        <button onClick={onAction}>Previous</button>
        <button onClick={onAction}>Next</button>
      </div>
    )
  }
}

export default PrevoiusNextButtons;
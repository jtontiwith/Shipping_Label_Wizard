import React from 'react';
import './wizard.css';

const GetWeight = (props) => {
  const { weight } = props.wizardContext;
  return (
    <form className="form">
      <div className="input-label-aligner">
        <label for="weight">Weight:</label>
        <input className="base-input" type="number" name="weight" value={weight} onChange={props.handleChange} />
      </div>
    </form>
  );  
}

export default GetWeight;
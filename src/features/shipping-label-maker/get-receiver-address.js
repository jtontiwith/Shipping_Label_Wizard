import React from 'react';
import './wizard.css';

const GetReceiverAddress = (props) => {
  const { name, street, city, state, zip } = props.wizardContext.to;
  const { handleChange } = props;
  return (
    <form className="form">
      <label for="Receiver Name">
        <input className="base-input" type="text" name="name" value={name} onChange={handleChange} placeholder="Receiver Name" />
      </label>
      <label for="Street">
        <input className="base-input" type="text" name="street" value={street} onChange={handleChange} placeholder="Street" />
      </label>
      <label for="City">
        <input className="base-input" type="text" name="city" value={city} onChange={handleChange} placeholder="City" />
      </label>
      <label for="State">
        <input className="base-input" type="text" name="state" value={state} onChange={handleChange} placeholder="State" />
      </label>
      <label for="Zip Code">
        <input className="base-input" type="text" name="zip" value={zip} onChange={handleChange} placeholder="Zip" />
      </label>
    </form>
  ); 
}

export default GetReceiverAddress;
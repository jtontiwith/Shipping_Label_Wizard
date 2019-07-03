import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css'; 

const GetSenderAddress = (props) => {
  const { name, street, city, state, zip } = props.wizardContext.from;
  const { handleChange } = props;
  return (
    <form className="form">
      <label htmlFor="Sender Name">
        <input className="base-input" type="text" name="name" value={name} onChange={handleChange} placeholder="Sender Name"/>
      </label>
      <label htmlFor="Street">
        <input className="base-input" type="text" name="street" value={street} onChange={handleChange} placeholder="Street" />
      </label>
      <label htmlFor="City">
        <input className="base-input" type="text" name="city" value={city} onChange={handleChange} placeholder="City" />
      </label>
      <label htmlFor="State">
        <input className="base-input" type="text" name="state" value={state} onChange={handleChange} placeholder="State" />
      </label>
      <label htmlFor="Zip Code">
        <input className="base-input" type="text" name="zip" value={zip} onChange={handleChange} placeholder="Zip" />
      </label>
    </form>
  );
}

export default GetSenderAddress;

GetSenderAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
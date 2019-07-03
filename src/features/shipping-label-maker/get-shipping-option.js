import React from 'react';
import './wizard.css';

const GetShippingOption = (props) => {
  const { shippingOption } = props.wizardContext;
  return (
  <form className="form">
    <label for="Shipping Options">
      Get Shipping Option: &nbsp;
      <input type="checkbox" name="shippingOption" value={1} onChange={props.handleChange} checked={shippingOption === '1' ? true : false} />ground
      <input type="checkbox" name="shippingOption" value={2} onChange={props.handleChange} checked={shippingOption === '2' ? true : false} />priority
    </label>
  </form>
  )
}

export default GetShippingOption;
import React from 'react';
import './wizard.css'

const ConfirmShipping = (props) => {
  const sender = props.wizardContext.from;
  const receiver = props.wizardContext.to;
  const { weight, shippingOption } = props.wizardContext;

  const jsxMaker = (customer) => {
    let customerArray = [];
    //let i = 0;
    for (let [key, value] of Object.entries(customer)) {
      //i++;
      customerArray.push(<div>{key + ':' + value}</div>)  
    } 
    return customerArray
  }

  const ShippingOption = {
    ground: 1,
    priority: 2
  }

  const shippingCost = (weight, shippingOption) => {
    const parsedShippingOption = parseInt(shippingOption, 10);
    const shippingRate = 0.40;
    const shippingCost = weight * shippingRate *
    (parsedShippingOption === ShippingOption.ground ? 1 : 1.5);
    return shippingCost.toFixed(2);
  }
  
  return (
    <div className="form">confirm shipping order
      <div>
        {jsxMaker(sender)}
      </div>
      <br></br>
      <div>
        {jsxMaker(receiver)}
      </div>
      <div>
        {shippingCost(weight, shippingOption)}
      </div>
    </div>
  )
}

export default ConfirmShipping;
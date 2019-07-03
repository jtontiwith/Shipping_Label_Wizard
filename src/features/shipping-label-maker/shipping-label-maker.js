import React, { Component } from 'react';
import Wizard from '../../core/wizard/wizard';
import GetSenderAddress from '../shipping-label-maker/get-sender-address';
import GetReceiverAddress from '../shipping-label-maker/get-receiver-address';
import GetWeight from '../shipping-label-maker/get-weight';
import GetShippingOption from '../shipping-label-maker/get-shipping-option';
import ConfirmShipping from '../shipping-label-maker/confirm-shipping'; 
import PrevoiusNextButtons from './previous-next-buttons';
import ProgressHeader from '../../core/wizard/progress-header';
import './wizard.css';

class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: ''
        },
      to: {
        name: '',
        street: '',
        city: '', 
        state: '',
        zip: ''
        },
      weight: 0,
      shippingOption: null,
      currentStep: 0
    }
  }


onAction = (e) => {
  const stepDirection = e.target.textContent
  if(stepDirection === 'Previous') {
    this.setState((state) => ({
      currentStep: state.currentStep > 0 ? state.currentStep - 1 : state.currentStep
    }))
  } else if (stepDirection === 'Next') {
    this.setState((state) => ({ //below make one length and the other indexOf
      currentStep: state.currentStep < 4 ? state.currentStep + 1 : state.currentStep
    }))
  } 
}

handleChange = (e) => {
  const target = e.target;
  const value = target.value;
  const name = target.name
  const { currentStep } = this.state
  
  switch(currentStep) { //change state based on the step
    case 0:
      this.setState((state) => ({
        from: {
          ...state.from,
          [name]: value
        }
      }));
    break;
    case 1:
      this.setState((state) => ({
        to: {
          ...state.to,
          [name]: value
        }
      }));
    break;
    default:
      this.setState({
        [name]: value
      });
  }
}

render() {
  const { currentStep } = this.state;
  
  const wizardSteps = [
      <GetSenderAddress wizardContext={this.state} handleChange={this.handleChange} />, 
      <GetReceiverAddress wizardContext={this.state} handleChange={this.handleChange} />, 
      <GetWeight wizardContext={this.state} handleChange={this.handleChange} />,
      <GetShippingOption wizardContext={this.state} handleChange={this.handleChange} />,
      <ConfirmShipping wizardContext={this.state} />
    ];
  
  return (
    <div className="container">
      <ProgressHeader currentStep={currentStep} />
      <Wizard>
        {wizardSteps[currentStep]}
        <PrevoiusNextButtons currentStep={currentStep} onAction={this.onAction} />
      </Wizard>
    </div>
  )
}

}

export default ShippingLabelMaker;


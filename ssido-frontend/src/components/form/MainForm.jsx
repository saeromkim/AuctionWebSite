// MainForm.jsx
import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        itemName: '',
        category: '',
        initPrice: '',
        hopePrice: '',
        itemStatus: '',
        dealOption: '',
        dealLocation:'',
        description:'',
        roomId:null
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description } = this.state;
        const values = { itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description };
        switch(step) {
        case 1:
            return <StepOne 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <StepTwo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Success 
                    values={values}/>
        default :
            return <Success 
                    values={values}/>
        }
    }
}

export default MainForm;
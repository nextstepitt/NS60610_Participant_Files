// Checkout.tsx
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component, FormEvent, ReactNode } from 'react';

import '../assets/styles/application.css';

interface CheckoutProps {

}

// TODO: Add the CheckoutState class here:

class CheckoutState {

    public cardNumber: string = '';
    public cardNumberIsValid: boolean = false;
    public name: string = '';
    public nameIsValid: boolean = false;
}

class Checkout extends Component<CheckoutProps, CheckoutState> {

    // TODO: Instantiate the state instance here:

    public state: CheckoutState = new CheckoutState();

    constructor(props: CheckoutProps) {

        super(props);

        // TODO: Bind the methods to this here:

        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.setCardNumberValidationState = this.setCardNumberValidationState.bind(this);
        this.setNameValidationState = this.setNameValidationState.bind(this);

    }

    // TODO: Put the event handler methods here:

    public onChangeCardNumber(event: FormEvent<HTMLInputElement>): void {

        const newCardNumber = event.currentTarget.value;
    
        this.setState( (state: CheckoutState, props: CheckoutProps) => {
            
            return { cardNumber: newCardNumber }
        });
    
        this.setCardNumberValidationState(/^\d{13,}$/.test(newCardNumber));
    }
    
    public onChangeName(event: FormEvent<HTMLInputElement>): void {
    
        const newName = event.currentTarget.value;
    
        this.setState( (state: CheckoutState, props: CheckoutProps) => {
            
            return { name: newName }
        });
    
        this.setNameValidationState(/^\w+\ \w+$/.test(newName));
    }    

    public render(): ReactNode {

        return (
            <div>
                <h1>Checkout</h1>
                <form>
                    <div className="cc-form">
                        <div className="cc-form-row">
                            <div className="cc-form-label">
                                <label className="cc-form-label">Name:</label>
                            </div>
                            <div className="cc-form-field">
                                { /* TODO: Add the name input field here: */ }
                                <input type="text"
                                        className={ 'cc-form-field ' + ( this.state.nameIsValid ? 'cc-form-field-requirement-met' : 'cc-form-field-required' ) }
                                        value={ this.state.name } 
                                        onChange={ this.onChangeName } />
                            </div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label">
                                <label className="cc-form-label">Card Number:</label>
                            </div>
                            <div className="cc-form-field">
                                { /* TODO: Add the cardNumber input field here: */ }
                                <input type="text"
                                        className={ 'cc-form-field ' + ( this.state.cardNumberIsValid ? 'cc-form-field-requirement-met' : 'cc-form-field-required' ) }
                                        value={ this.state.cardNumber }
                                        onChange={ this.onChangeCardNumber } />

                            </div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label"></div>
                            <div className="cc-form-field">
                                <button>Cancel</button>&nbsp;
                                <button>Submit</button>
                            </div>
                            <div className="clear-all"></div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    // TODO: Put the validation methods here:

    public setCardNumberValidationState(valid: boolean): void {

        if (this.state.cardNumberIsValid !== valid) {
        
            this.setState( (state: CheckoutState, props: CheckoutProps) => {
                
                return { cardNumberIsValid: valid };
            });
        }
     }

    public setNameValidationState(valid: boolean): void {

        if (this.state.nameIsValid !== valid) {
        
            this.setState( (state: CheckoutState, props: CheckoutProps) => {
                
                return { nameIsValid: valid };
            });
        }
    }
}

export default Checkout
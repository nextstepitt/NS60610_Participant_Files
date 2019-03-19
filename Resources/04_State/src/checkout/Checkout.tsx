// Checkout.tsx
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component, FormEvent, ReactNode } from 'react';

import '../assets/styles/application.css';

interface CheckoutProps {

}

// TODO: Add the CheckoutState class here.

class Checkout extends Component<CheckoutProps, CheckoutState> {

    // TODO: Instantiate the state instance here:

    constructor(props: CheckoutProps) {

        super(props);

        // TODO: Bind the methods to this here:
    }

    // TODO: Put the event handler methods here:

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
                            </div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label">
                                <label className="cc-form-label">Card Number:</label>
                            </div>
                            <div className="cc-form-field">
                                { /* TODO: Add the cardNumber input field here: */ }
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
x}

export default Checkout
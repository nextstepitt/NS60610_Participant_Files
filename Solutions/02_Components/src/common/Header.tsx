// Header.tsx
// Copyright © nTier Training. All rights reserved.
//
// Application header content.
//

import React, { Component, ReactNode } from 'react';

import logo from '../assets/images/tccc-logo.png';
import '../assets/styles/application.css';

class Header extends Component {

    public render(): ReactNode {

        return (
            <header className="app-header">
                <img id="app-logo" src={logo} alt="logo" />
            </header>
        );
    }
}

export default Header;
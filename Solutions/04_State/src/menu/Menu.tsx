// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component, ReactNode } from 'react';

import '../assets/styles/application.css';
import dataContext from '../data-access/dataContext';
import Product from '../data-access/Product';
import ProductList from './ProductList';

interface MenuProps {

}

class MenuState {

    public beverages: Product[] = Array<Product>();
    public pastries: Product[] = Array<Product>();
}

class Menu extends Component<MenuProps, MenuState> {

    public readonly state: MenuState = new MenuState();

    public componentDidMount(): void {

        // These methods do asynchronous loading of the state, but the constructor cannot be async
        // so the are delegated and the promise is ignored in the constructor.
        
        this.loadBeverages();
        this.loadPastries();
    }

    public async loadBeverages(): Promise<void> {
    
        try {
        
            const newBeverages: Array<Product> = await dataContext.beverageContext.getBeverages();

            this.setState( (state: MenuState, props: MenuProps) => { return { beverages: newBeverages } });
        }

        catch (error) {
            
            console.log(error);
            this.setState( (state: MenuState, props: MenuProps) => { return { beverages: [] } });
        }
    }

    public async loadPastries(): Promise<void> {

        try {
        
            const newPastries: Array<Product> = await dataContext.pastryContext.getPastries();

            this.setState( (state: MenuState, props: MenuProps) => { return { pastries: newPastries } });
        }

        catch (error) {
            
            console.log(error);
            this.setState( (state: MenuState, props: MenuProps) => { return { pastries: [] } });
        }
    }

    public render(): ReactNode {

        return (
            <div>
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.state.beverages } />
                <ProductList title="Pastries" products={ this.state.pastries } />
            </div>
        );
    }
}

export default Menu;
// Menu.tsx
// Copyright © NextStep IT Training. All rights reserved.
//
// Note that due to limitations in TypeScript, @connect cannot be used in front of the class, so it
// is implemented the old-fashioned way as a function call in the export at the bottom of the module.
// The limitation is documented in the react-redux type mappings at
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-redux/index.d.ts.
//

import React, { Component, FormEvent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import '../assets/styles/application.css';
import Product from '../data-access/Product';
import ProductActionController from '../data-access/ProductActionController';
import ApplicationModelState from '../model/ApplicationModelState';
import ProductList from './ProductList';

interface MenuProps {

    beverages: Product[];
    pastries: Product[];
    productActionController: ProductActionController;
}

class MenuState {

    public item: Product | null = null;
    public showSpecialInstructions: boolean = false;
    public specialInstructions: string = '';
}

// @connect(mapStateToProps, mapDispatchToProps)
class Menu extends Component<MenuProps, MenuState> {

    public readonly state = new MenuState();

    public constructor(props: MenuProps) {

        super(props)
    }

    public componentDidMount(): void {

        this.props.productActionController.getBeverages();
        this.props.productActionController.getPastries();
    }

    public static mapStateToProps(state: ApplicationModelState, ownProps: MenuProps): any {

        return {

            beverages: state.products.beverages,
            pastries: state.products.pastries,
        }
    }

    public static mapDispatchToProps(dispatch: Dispatch, ownProps: MenuProps): any {

        return {

            productActionController: new ProductActionController(dispatch)
        }
    }

    public render(): ReactNode {

        return (
            <div className="app-content">
                <h1>Menu</h1>
                <ProductList title="Beverages" products={ this.props.beverages } />
                <ProductList title="Pastries" products={ this.props.pastries } />
            </div>
        );
    }
}

// See the comment in the header about using connect vs the @connect decorator in TypeScript.

export default connect(Menu.mapStateToProps, Menu.mapDispatchToProps)(Menu);
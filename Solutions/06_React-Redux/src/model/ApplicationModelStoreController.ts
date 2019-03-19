// ApplicationModelStoreController.ts
// Copyright © NextStep IT Training. All rights reserved.
//

import { combineReducers, createStore, Store } from 'redux';

import ProductModelState from '../data-access/ProductModelState';
import ProductModelStateReducer from '../data-access/ProductModelStateReducer';
import ApplicationModelState from './ApplicationModelState';
import ModelAction from './ModelAction';

class ApplicationModelStoreController {

    private reduxStore: Store<ApplicationModelState, ModelAction>;

    public constructor() {

        const productModelStateReducer: ProductModelStateReducer = new ProductModelStateReducer();
        const mapReducersToModelState = { products: productModelStateReducer.reduce };

        this.reduxStore = createStore(combineReducers<ApplicationModelState>(mapReducersToModelState), this.initialState)
    }

    public get store(): Store<ApplicationModelState, ModelAction> {

        return this.reduxStore;
    }

    public get initialState(): ApplicationModelState {

        // The initial state passed to createStore MUST be a plain object, not an instance of
        // ApplicationModelState. The constructor bound in the class gets kicked back from
        // createStore as another property it doesn't expect! That is why the ApplicationModelState
        // is an interface, not an initialized class.

        return {

            products: new ProductModelState()
        }
    }
}

export default ApplicationModelStoreController;
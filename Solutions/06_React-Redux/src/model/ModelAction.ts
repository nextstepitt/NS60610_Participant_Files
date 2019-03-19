// ModelAction.ts
// Copyright © NextStep IT Training. All rights reserved.
//

import { Action, AnyAction } from 'redux';

export default interface ModelAction extends AnyAction {

    type: string;
    payload?: any;
}

function createModelAction(type: string, payload?: any) {

    return { type: type, payload: payload };
}

export { createModelAction }
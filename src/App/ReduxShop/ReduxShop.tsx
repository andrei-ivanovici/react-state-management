import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import {ConnectedShop} from "./Shop/Shop";

export function ReduxShop() {
    return <Provider store={store}>
        <ConnectedShop/>
    </Provider>;
}

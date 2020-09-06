import React, {createContext, ReactElement, useReducer} from 'react';
import {ContextShopState} from "./ContextShop.model";

const Context = createContext<ContextShopState>(null);

function useShopState(): ContextShopState {
    const [state, dispatch] = useReducer((state, action) => {
        return state;
    }, {});
    return state;
}

export function ShopState({children}: { children: ReactElement }) {
    const context = useShopState();
    return <Context.Provider value={context}>
        {children}
    </Context.Provider>;
}

import React from 'react';
import {Header} from "./Header";
import {ShopState} from "./ShopState";

export function ContextShop() {
    return <div>
        <ShopState>
            <Header/>
        </ShopState>
    </div>;
}

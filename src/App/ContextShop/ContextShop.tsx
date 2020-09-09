import React, {useState} from 'react';
import {ContextHeader} from "./ContextHeader";
import {ShopState} from "./ShopState";
import {AppServices, Services} from "./AppServices";
import {DataService} from "../data.service";
import {Route, Routes} from "react-router";
import {ContextGallery} from "./ContextGallery/ContextGallery";
import {ContextCart} from "./ContextCart/ContextCart";

function useServices(): Services {
    const [api] = useState(() => new DataService());
    return {
        api
    };
}

export function ContextShop() {
    const services = useServices();
    return <div>
        <AppServices services={services}>
            <ShopState>
                <ContextHeader/>
                <Routes>
                    <Route path={"cart"} element={<ContextCart/>}/>
                    <Route path={""} element={<ContextGallery/>}/>
                </Routes>
            </ShopState>
        </AppServices>
    </div>;
}

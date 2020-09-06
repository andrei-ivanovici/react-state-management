import React from 'react';
import {ReduxShop} from "./ReduxShop/ReduxShop";
import {Routes, Route} from "react-router";
import {Home} from "./Home";
import {ContextShop} from "./ContextShop/ContextShop";
import {BrowserRouter} from "react-router-dom";
import {VanillaShop} from "./VanillaShop/VanillaShop";

export function App() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}>
                    <Home/>
                </Route>
                <Route path={"/redux/*"} element={<ReduxShop/>}/>
                <Route path={"/vanilla/*"} element={<VanillaShop/>}/>
                <Route path={"/context"}>
                    <ContextShop/>
                </Route>
            </Routes>
        </BrowserRouter>


    </div>;
}

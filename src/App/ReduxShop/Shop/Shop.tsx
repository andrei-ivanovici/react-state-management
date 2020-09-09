import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {ConnectedGallery} from "./Gallery/ReduxGallery";
import {ReduxHeader} from "./ReduxHeader";
import {loadItems} from "./shop.thunks";
import {AppThunkDispatch} from "../store";
import {Routes, Route} from "react-router";
import {ReduxCart} from "./Cart/ReduxCart";
import {initApi} from "../../data.service";
import styled from "styled-components";

export interface ShopOutputs {
    onLoad: () => void;
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export  type ShopProps = ShopOutputs;
initApi("");

export function Shop({onLoad}: ShopProps) {
    useEffect(() => {

        onLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Container>
        <ReduxHeader/>
        <Routes>
            <Route path={"cart"} element={<ReduxCart/>}/>
            <Route path={""} element={<ConnectedGallery/>}/>
        </Routes>
    </Container>;
}


function mapOutputs(dispatch: AppThunkDispatch): ShopOutputs {
    return {
        onLoad: () => {
            dispatch(loadItems());
        }
    } as any;
}

export const ConnectedShop = connect(null, mapOutputs)(Shop);

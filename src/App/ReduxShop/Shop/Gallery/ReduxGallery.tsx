import React from 'react';
import {AppState} from "../../store.model";
import {connect} from "react-redux";
import {ReduxGalleryItem} from "./ReduxGalleryItem";
import styled from "styled-components";
import {Dispatch} from "redux";
import {addOrIncrementItem} from "../Cart/cart.thunks";
import {Product} from "../../../shop.model";

export interface GaleryInputs {
    items: Product[];
}

export interface GalleryOutputs {
    onAdd: (item: Product) => void;
}


export  type  GalleryProps = GaleryInputs & GalleryOutputs
const Root = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); 
  grid-gap: 2px;
`;

export function ReduxGallery({items, onAdd}: GalleryProps) {
    return items ? <Root>
            {
                items.map(i => <ReduxGalleryItem key={i.id} item={i} onAddToCart={onAdd}/>)
            }
        </Root>
        : <span>loading...</span>;
}

function mapInputs(state: AppState): GaleryInputs {
    return {
        items: state.shop.items
    };
}

function mapOutputs(dispatch: Dispatch): GalleryOutputs {
    return {
        onAdd: (item: Product) => dispatch(addOrIncrementItem(item) as any)
    };
}


const connector = connect(mapInputs, mapOutputs);

export const ConnectedGallery = connector(ReduxGallery);

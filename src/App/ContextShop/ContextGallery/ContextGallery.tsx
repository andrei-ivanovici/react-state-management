import React, {useEffect} from 'react';
import styled from "styled-components";
import {useShopActions, useAppState} from "../ShopState";
import {ContextGalleryItem} from "./ContextGaleryItem";


const Root = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); 
  grid-gap: 2px;
`;


function useGallery() {
    const {products} = useAppState();
    const {loadProducts} = useShopActions();
    useEffect(() => {
        loadProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {products};
}

export function ContextGallery() {
    const {products} = useGallery();
    return <Root>
        {products
            .map(product => <ContextGalleryItem key={product.id} item={product}/>)}
    </Root>;
}

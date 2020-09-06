import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DataService} from "../../data.service";
import {VanillaGalleryItem} from "./VanillaGaleryItem";
import {Product} from "../../shop.model";

const Root = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); 
  grid-gap: 2px;
`;


function useGallery() {
    const [service] = useState(() => new DataService());
    const [items, setItems] = useState([]);
    useEffect(() => {
        service.getItems().then(setItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {items};
}

export interface VanillaGalleryProps {
    onAddToCart: (item: Product) => void;
}

export function VanillaGallery({onAddToCart}: VanillaGalleryProps) {
    const {items} = useGallery();
    return <Root>
        {items
            .map(item => <VanillaGalleryItem key={item.id} item={item} onAddToCart={onAddToCart}/>)}
    </Root>;
}

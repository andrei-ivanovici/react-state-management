import React from 'react';
import styled from "styled-components";
import {Product} from "../../shop.model";
import {useCartActions} from "../ShopState";

export interface GalleryItemProps {
    item: Product;
}

const Root = styled.div`
  padding: 1em;
  border: 1px solid #C3C3C3;
  display: grid;
  grid-template-rows:2em 1fr 2em;
  grid-gap: 2px;
  grid-template-columns: max-content 1fr;
  grid-template-areas: "title title" 
                        "image details" 
                         "footer footer";
`;
const Title = styled.div`
  grid-area: title;
  font-size: 2em;
  font-weight: bold;
  display:  flex;
  justify-content: center;;
`;

const Picture = styled.img`
grid-area: image;
width: 200px;
`;

const Footer = styled.div`
display: grid;
grid-area: footer;
`;

const Details = styled.div`
  border-left: 1px solid #C3C3C3;
  padding: 1em;
  grid-area: details;
  display: grid;
  grid-template-rows: repeat(2, 2em);
`;
const DetailsItem = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns:max-content 1fr;
  grid-gap: 3px;
`;
const Label = styled.div`
font-weight: bold;
font-size: 1.1em;
`;

function useGalleryItem() {
    const {addToCart} = useCartActions();
    return {addToCart};
}

function Header({item}: { item: Product }) {
    return <Details>
        <Title> {item.name} </Title>
        <Picture src={item.photoUrl}/>
        <DetailsItem>
            <Label>
                Description
            </Label>
            <div>
                {item.description}
            </div>
        </DetailsItem>

        <DetailsItem>
            <Label>
                Price
            </Label>
            <div>
                {item.price} EUR
            </div>
        </DetailsItem>

    </Details>;
}

export function ContextGalleryItem({item}: GalleryItemProps) {
    const {addToCart} = useGalleryItem();
    return <Root>
        <Header item={item}/>
        <Footer>
            <button onClick={() => addToCart(item)}>Add to cart</button>
        </Footer>
    </Root>;
}

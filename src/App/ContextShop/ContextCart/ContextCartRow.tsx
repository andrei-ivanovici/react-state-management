import React from 'react';
import styled from "styled-components";
import {CartItem} from "../../shop.model";

export interface VanillaCartItemProps {
    item: CartItem;
    onIncrement: (item) => void;
    onDecrement: (item) => void;
    onRemove: (item) => void;
}

const RowTitle = styled.div`
 font-size: 1.5em;
 font-weight: bold;
`;

const RowContainer = styled.div`
 display:  grid;
 font-size: 20px;
 grid-template-columns: repeat(5, 1fr);
 align-items: center;
 grid-gap: 5px;
`;

export function ContextCartRow({item, onIncrement, onDecrement, onRemove}: VanillaCartItemProps) {
    return <RowContainer>
        <RowTitle>
            {item.name}
        </RowTitle>
        <div>
            {item.price}
        </div>
        <div>
            {item.count}
        </div>
        <div>
            <button onClick={() => onIncrement(item)}>+</button>
            <button onClick={() => onDecrement(item)}>-</button>
            <button onClick={() => onRemove(item)}>remove</button>
        </div>
    </RowContainer>;
}

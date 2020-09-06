import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {incrementItemCount, decrementItemCount, removeItemFromCart} from "./cart.thunks";
import {CartItem} from "../../../shop.model";

export interface ReduxCartItemProps {
    item: CartItem;
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

export function ReduxCartRow({item}: ReduxCartItemProps) {
    const dispatch = useDispatch();
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
            <button onClick={() => dispatch(incrementItemCount(item.id))}>+</button>
            <button onClick={() => dispatch(decrementItemCount(item.id))}>-</button>
            <button onClick={() => dispatch(removeItemFromCart(item.id))}>remove</button>
        </div>
    </RowContainer>;
}

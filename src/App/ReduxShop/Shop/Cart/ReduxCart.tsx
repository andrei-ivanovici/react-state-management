import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from "../../store.model";
import styled from "styled-components";
import {ReduxCartRow} from "./ReduxCartRow";
import {CartState} from "./cart.model";
import {CartItem} from "../../../shop.model";

const RowsContainer = styled.div`

grid-gap: 1em;
grid-template-columns: max-content max-content  max-content;
padding: 1em;
align-items: center;
`;

interface ReduxCartItemsProps {
    items: CartItem[];
}

const CartContainer = styled.div`
   padding: 1em;
   box-sizing: border-box;
`;

function Rows({items}: ReduxCartItemsProps) {
    return <RowsContainer>
        {items.map(item =>
            <ReduxCartRow item={item} key={item.id}/>
        )}
    </RowsContainer>;
}

function useCart() {
    const {items, totalPrice} = useSelector<AppState, CartState>(s => s.cart);

    return {
        totalPrice,
        items
    };
}

export function ReduxCart() {
    const {items, totalPrice} = useCart();

    return <CartContainer>
        <h1>Cart</h1>
        <Rows items={items}/>
        <div><h3>Total</h3> {totalPrice}</div>
    </CartContainer>;
}

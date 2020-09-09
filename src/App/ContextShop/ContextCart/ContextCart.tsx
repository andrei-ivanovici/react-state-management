import React, {useMemo, ReactNode, Fragment} from 'react';
import styled from "styled-components";
import {ContextCartRow} from './ContextCartRow';
import {useAppState, useCartActions} from "../ShopState";

const RowsContainer = styled.div`
grid-gap: 1em;
grid-template-columns: max-content max-content  max-content;
padding: 1em;
align-items: center;
`;

export interface VanillaCartItem {
    id: string;
    name: string;
    price: number;
    count: number;
}

interface RowsProps {
    items: VanillaCartItem[];
    children: (item: VanillaCartItem) => ReactNode;
}

const CartContainer = styled.div`
   padding: 1em;
   box-sizing: border-box;
`;

function Rows({items, children}: RowsProps) {
    return <RowsContainer>
        {items.map(item => <Fragment key={item.id}>
                {children(item)}
            </Fragment>
        )}
    </RowsContainer>;
}


function useTotalPrice() {
    const {cartItems} = useAppState();
    const computeTotals = (items) => items.reduce((acc, item) => (item.count * item.price) + acc, 0);
    return useMemo(() => computeTotals(cartItems), [cartItems]);
}

function useCart() {
    const {cartItems} = useAppState();
    const actions = useCartActions();
    return {items: cartItems, ...actions};
}

export function ContextCart() {

    const totalPrice = useTotalPrice();
    const {items, incrementItemCount, decrementItemCount, removeFromCart} = useCart();

    return <CartContainer>
        <h1>Cart</h1>
        <Rows items={items}>
            {item => <ContextCartRow
                item={item}
                onDecrement={decrementItemCount}
                onIncrement={incrementItemCount}
                onRemove={removeFromCart}/>}
        </Rows>
        <div><h3>Total</h3> {totalPrice}</div>
    </CartContainer>;
}

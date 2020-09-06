import React, {useMemo, ReactNode, Fragment} from 'react';
import styled from "styled-components";
import {VanillaCartRow} from "./VanillaCartRow";
import {CartItem} from "../../shop.model";

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

export interface VanillaCartProps {
    items: VanillaCartItem[];
    onIncrementItemCount: (item: CartItem) => void;
    onDecrementItemCount: (item: CartItem) => void;
    onRemoveItem: (item: CartItem) => void;
}


function useTotalPrice({items}: VanillaCartProps) {
    const computeTotals = (items) => items.reduce((acc, item) => (item.count * item.price) + acc, 0);
    return useMemo(() => computeTotals(items), [items]);
}

export function VanillaCart(props: VanillaCartProps) {
    const {items, onDecrementItemCount, onIncrementItemCount, onRemoveItem} = props;
    const totalPrice = useTotalPrice(props);

    return <CartContainer>
        <h1>Cart</h1>
        <Rows items={items}>
            {item => <VanillaCartRow
                item={item}
                onDecrement={onDecrementItemCount}
                onIncrement={onIncrementItemCount}
                onRemove={onRemoveItem}/>}
        </Rows>
        <div><h3>Total</h3> {totalPrice}</div>
    </CartContainer>;
}

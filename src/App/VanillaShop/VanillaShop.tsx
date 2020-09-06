import React, {useState} from 'react';
import styled from "styled-components";
import {Routes, Route} from "react-router";
import {VanillaGallery} from "./VanillaGallery/VanillaGallery";
import {VanillaCart, VanillaCartItem} from "./VanillaCart/VanillaCart";
import {VanillaHeader} from "./VanillaHeader";
import {Product} from "../shop.model";

const Container = styled.div`
    display: grid ;
`;

function useCart() {
    const [cartItems, setCartItems] = useState<VanillaCartItem[]>([]);
    const addToCart = (product: Product) => {
        setCartItems(items => {
            const foundItem = items.find(i => i.id === product.id);
            if (foundItem) {
                incrementItemCount(foundItem);
                return items;
            }
            return [...items, {...product, count: 1}];
        });
    };

    const removeFromCart = ({id}: VanillaCartItem) => {
        setCartItems(items => items.filter(i => i.id !== id));
    };

    const incrementItemCount = ({id}: VanillaCartItem) => {
        setCartItems(items => items.map(item => {
            if (item.id !== id) {
                return item;
            }

            return {
                ...item,
                count: item.count + 1
            };
        }));
    };
    const decrementItemCount = ({id}: VanillaCartItem) => {
        setCartItems(items => items.map(item => {
            if (item.id !== id) {
                return item;
            }

            return {
                ...item,
                count: item.count === 1 ? item.count : item.count - 1
            };
        }));
    };

    return {addToCart, removeFromCart, cartItems, decrementItemCount, incrementItemCount};
}

export function VanillaShop() {
    const {
        cartItems, addToCart,
        removeFromCart,
        incrementItemCount,
        decrementItemCount
    } = useCart();

    return <Container>
        <VanillaHeader items={cartItems}/>
        <Routes>
            <Route path={"cart"} element=
                {<VanillaCart items={cartItems}
                              onRemoveItem={removeFromCart}
                              onDecrementItemCount={decrementItemCount}
                              onIncrementItemCount={incrementItemCount}/>}
            />
            <Route path={""} element={<VanillaGallery onAddToCart={addToCart}/>}/>
        </Routes>
    </Container>;
}

import React, {createContext, ReactElement, useState, useContext} from 'react';
import {ContextShopState} from "./ContextShop.model";
import {Product, CartItem} from "../shop.model";
import {useAppServices} from "./AppServices";

const Context = createContext<ContextShopState>(null);

function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const {api} = useAppServices();
    const loadProducts = () => {
        api.getItems()
            .then(setProducts);
    };
    return {
        products,
        loadProducts
    };
}

function useCart() {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const addToCart = (product: Product) => {
        setCartItems(items => {
            const existingProduct = items.find(i => i.id === product.id);
            if (existingProduct) {
                incrementItemCount(existingProduct);
                return items;
            }
            return [...items, {...product, count: 1}];
        });
    };
    const removeFromCart = (cartItem: CartItem) => {
        setCartItems(items => items.filter(i => i.id !== cartItem.id));
    };
    const incrementItemCount = (cartItem: CartItem) => {
        setCartItems(items => items.map(item => {
            if (item.id !== cartItem.id) {
                return item;
            }
            return {
                ...item,
                count: item.count + 1
            };
        }));
    };
    const decrementItemCount = (cartItem: CartItem) => {
        setCartItems(items => items.map(item => {
            if (item.id !== cartItem.id) {
                return item;
            }
            return {
                ...item,
                count: item.count === 1 ? item.count : item.count - 1
            };
        }));
    };

    return {
        cartItems,
        addToCart,
        removeFromCart,
        incrementItemCount,
        decrementItemCount
    };
}

function useShop(): ContextShopState {
    const cart = useCart();
    const shop = useProducts();


    return {
        shop,
        cart
    };
}

export function useAppState() {
    const {cart: {cartItems}, shop: {products}} = useContext(Context);
    return {cartItems, products};
}

export function useCartActions() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {cart: {cartItems: _, ...actions}} = useContext(Context);
    return actions;
}

export function useShopActions() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {shop: {products: _, ...actions}} = useContext(Context);
    return actions;
}

export function ShopState({children}: { children: ReactElement[] }) {
    const context = useShop();

    return <Context.Provider value={context}>
        {children}
    </Context.Provider>;
}

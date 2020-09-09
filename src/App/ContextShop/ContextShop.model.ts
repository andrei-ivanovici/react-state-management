import {Product, CartItem} from "../shop.model";


export interface ContextShopState {
    shop: {
        products: Product[];
        loadProducts: () => void;
    };
    cart: {
        addToCart: (product: Product) => void;
        removeFromCart: (cartItem: CartItem) => void;
        incrementItemCount: (cartItem: CartItem) => void;
        decrementItemCount: (cartItem: CartItem) => void;
        cartItems: CartItem[];
    };
}

import {CartState} from "./Shop/Cart/cart.model";
import {Product} from "../shop.model";


export interface Client {
    name: string;
}

export interface ShopState {
    items: Product[];
}

export interface AppState {
    cart: CartState;
    shop: ShopState;
}

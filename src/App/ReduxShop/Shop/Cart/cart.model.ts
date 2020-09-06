import {CartItem} from "../../../shop.model";

export interface Totals {
    totalPrice: number;
    totalItems: number;
}

export interface CartState extends Totals {
    items: CartItem[];
}

import {Totals, CartState} from "./cart.model";
import {Product} from "../../../shop.model";

export function computeTotal(cart: CartState): Totals {

    const newTotal = cart.items.reduce((acc, item) => (item.count * item.price) + acc, 0);
    const newTotalItems = cart.items.reduce((acc, item) => item.count + acc, 0);
    return {
        totalItems: newTotalItems,
        totalPrice: newTotal
    };
}

export function decrementItem(state: CartState, itemId: string) {
    const {items} = state;
    const item = items.find(item => item.id === itemId);

    if (!item) {
        return null;
    }
    const newCount = item.count - 1;
    return newCount > 0 ? newCount : 1;
}

export function incrementItem(state: CartState, itemId: string) {
    const {items} = state;
    const item = items.find(item => item.id === itemId);

    if (!item) {
        return null;
    }
    return item.count + 1;
}

export function itemExists(state: CartState, item: Product) {
    return state.items.find(i => i.id === item.id);
}

import {Dispatch} from "redux";
import {updateCartWithItem, updateTotals, updateItemCount, removeItem} from "./cart.actions";
import {AppState} from "../../store.model";
import {computeTotal, decrementItem, incrementItem, itemExists} from "./cart.ops";
import {Product} from "../../../shop.model";

export function addOrIncrementItem(item: Product) {
    return (dispatch, getState) => {
        const state: AppState = getState();
        if (itemExists(state.cart, item)) {
            dispatch(incrementItemCount(item.id));
        } else {
            dispatch(addItemToCart(item));
        }
    };
}

function addItemToCart(item: Product) {
    return (dispatch: Dispatch, getState: () => AppState) => {
        dispatch(updateCartWithItem(item));
        const {cart} = getState();
        const newTotals = computeTotal(cart);
        dispatch(updateTotals(newTotals));
    };
}

export function decrementItemCount(itemId: string) {
    return (dispatch, getState: () => AppState) => {
        let state = getState();
        const newCount = decrementItem(state.cart, itemId);
        if (!newCount) {
            return;
        }

        dispatch(updateItemCount(itemId, newCount));

        state = getState();
        const newTotals = computeTotal(state.cart);
        dispatch(updateTotals(newTotals));
    };
}

export function removeItemFromCart(itemid: string) {
    return (dispatch, getState: () => AppState) => {
        dispatch(removeItem(itemid));

        const state = getState();
        const newTotals = computeTotal(state.cart);
        dispatch(updateTotals(newTotals));

    };
}

export function incrementItemCount(itemId: string) {
    return (dispatch, getState: () => AppState) => {
        let state = getState();
        const newCount = incrementItem(state.cart, itemId);
        if (!newCount) {
            return;
        }

        dispatch(updateItemCount(itemId, newCount));

        state = getState();
        const newTotals = computeTotal(state.cart);
        dispatch(updateTotals(newTotals));

    };
}

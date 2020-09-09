import {Action} from "redux";
import {Totals} from "./cart.model";
import {Product} from "../../../shop.model";

export enum CartActionType {
    Add = "CART_Add",
    UpdateItemCount = "CART_UpdateItemCount",
    UpdateTotals = "CART_UpdateTotals",
    RemoveItem = "CART_RemoveItem",
}

export type  CartAction = Action<CartActionType>;

export interface UpdateTotalsAction extends CartAction {
    type: CartActionType.UpdateTotals;
    totals: Totals;
}

export interface AddItemCartAction extends CartAction {
    type: CartActionType.Add;
    product: Product;
}


export interface UpdateItemCountAction extends CartAction {
    type: CartActionType.UpdateItemCount;
    count: number;
    itemId: string;
}

export interface RemoveItemCartAction extends CartAction {
    type: CartActionType.RemoveItem;
    itemId: string;
}

export function updateCartWithItem(item: Product): AddItemCartAction {
    return {
        product: item,
        type: CartActionType.Add
    };
}

export function updateItemCount(id: string, count: number): UpdateItemCountAction {
    return {
        itemId: id,
        count,
        type: CartActionType.UpdateItemCount
    };
}

export function updateTotals(totals: Totals): UpdateTotalsAction {
    return {
        totals,
        type: CartActionType.UpdateTotals
    };
}

export function removeItem(id: string): RemoveItemCartAction {
    return {
        itemId: id,
        type: CartActionType.RemoveItem
    };
}

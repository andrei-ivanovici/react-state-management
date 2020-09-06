import {Action} from "redux";
import {Product} from "../../shop.model";


export enum ShopActionType {
    setItems = "SHOP_SetItems"
}

export type ShopAction = Action<ShopActionType>;

export interface SetItemsShopAction extends ShopAction {
    type: ShopActionType.setItems;
    items: Product[];
}

export function setItems(items: Product[]): SetItemsShopAction {
    return {
        items,
        type: ShopActionType.setItems
    };
}



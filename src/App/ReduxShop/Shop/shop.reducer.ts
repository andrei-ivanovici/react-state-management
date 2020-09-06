import {ShopState} from "../store.model";
import {ShopAction, ShopActionType, SetItemsShopAction} from "./shop.actions";

const initialState: ShopState = {
    items: []
};

export function shopReducer(state: ShopState, action: ShopAction): ShopState {
    const activeState = state || initialState;
    switch (action.type) {
        case ShopActionType.setItems: {
            return {
                ...activeState,
                items: (action as SetItemsShopAction).items
            };
        }
    }
    return activeState;
}

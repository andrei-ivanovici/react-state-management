import {
    CartAction,
    CartActionType,
    RemoveItemCartAction,
    AddItemCartAction,
    UpdateTotalsAction,
    UpdateItemCountAction
} from "./cart.actions";
import {CartState} from "./cart.model";


function addItem(state: CartState, {product}: AddItemCartAction): CartState {
    const {items} = state;
    return {
        ...state,
        items: [...items, {
            id: product.id,
            name: product.name,
            price: product.price,
            count: 1
        }]
    };
}

function removeItem(state: CartState, {itemId}: RemoveItemCartAction): CartState {
    return {
        ...state,
        items: state.items.filter(i => i.id !== itemId)
    };
}

function updateItemCount(state: CartState, {count, itemId}: UpdateItemCountAction) {
    const {items} = state;
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex < 0) {
        return state;
    }

    return {
        ...state,
        items: items.map(item => {
            if (item.id !== itemId) {
                return item;
            }

            return {
                ...item,
                count
            };
        })
    };
}

function updateTotals(state: CartState, action: UpdateTotalsAction) {
    return {
        ...state,
        ...action.totals
    };
}

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
};

export function cartReducer(state: CartState, action: CartAction) {
    const activeState: CartState = state || initialState;

    switch (action.type) {

        case CartActionType.Add: {
            return addItem(activeState, action as AddItemCartAction);
        }

        case CartActionType.UpdateTotals: {
            return updateTotals(activeState, action as UpdateTotalsAction);
        }
        case CartActionType.UpdateItemCount: {
            return updateItemCount(activeState, action as UpdateItemCountAction);
        }
        case CartActionType.RemoveItem: {
            return removeItem(activeState, action as RemoveItemCartAction);
        }
    }
    return activeState;
}

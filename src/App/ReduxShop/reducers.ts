import {combineReducers} from "redux";
import {AppState} from "./store.model";
import {cartReducer} from "./Shop/Cart/cart.reducer";
import {shopReducer} from "./Shop/shop.reducer";

export const rootReducer = combineReducers<AppState>(
    {
        cart: cartReducer,
        shop: shopReducer
    }
);

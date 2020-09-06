import {createStore, applyMiddleware, Action} from "redux";
import {AppState} from "./store.model";
import thunk, {ThunkDispatch} from "redux-thunk";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

export  type  AppThunkDispatch = ThunkDispatch<AppState, void, Action>
const initialState: AppState = {
    cart: {
        items: [],
        totalPrice: 0,
        totalItems:0
    },
    shop: {
        items: [],
    }
};
export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

import {setItems} from "./shop.actions";
import {data} from "../../../data-sample";

function timeoutPromise<T>(callBack: () => T, timeout): Promise<T> {
    return new Promise(resolve => {
        setTimeout(resolve(callBack()), timeout);
    });
}

export function loadItems() {
    return (dispatch) => {
        timeoutPromise(() => data as any, 1000)
            .then(items => dispatch(setItems(items)));

    };

}

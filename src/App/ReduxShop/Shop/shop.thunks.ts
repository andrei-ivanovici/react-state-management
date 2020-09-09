import {setItems} from "./shop.actions";
import {dataService} from "../../data.service";

export function loadItems() {
    const api = dataService();
    return (dispatch) => {
        api.getItems()
            .then(items => dispatch(setItems(items)));
    };
}

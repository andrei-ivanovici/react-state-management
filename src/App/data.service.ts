import {data} from "../data-sample";
import {Product} from "./shop.model";

export class DataService {
    public getItems(): Promise<Product[]> {
        return new Promise(resolve => setTimeout(() => resolve(data)));
    }
}

import {data} from "../data-sample";
import {Product} from "./shop.model";

export class DataService {
    public getItems(): Promise<Product[]> {
        return new Promise(resolve => setTimeout(() => resolve(data)));
    }
}

let instance: DataService = null;

export function initApi(accessToken: string) {
    instance = new DataService(/*accessToken*/);
}

export function initTestApi(mock) {
    instance = mock
}

export function dataService() {
    if (!instance) {
        throw  new Error("Please initialze the API first");
    }
    return instance;
}


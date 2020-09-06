export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    photoUrl: string;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    count: number;
}

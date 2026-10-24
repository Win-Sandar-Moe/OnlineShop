import type {Product} from "../api/Product.ts";
import {createContext} from "react";


export interface CartContextType{
    cartItems: Product[];
    addToCart: (item: any) => void;
    removeFromCart: (id: number) => void;
}

export const CartContext =
    createContext<CartContextType | null>(null);
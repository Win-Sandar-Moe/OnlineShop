import {type ReactNode, useContext, useState} from "react";
import type {Product} from "../api/Product.ts";
import {CartContext} from "./CartContext.tsx";

export function CartContextProvider({children}:{children:ReactNode}) {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (item: Product) => {
        setCartItems((prevCart) => {
            // 1. Cart ထဲမှာ ရှိပြီးသား Item ဟုတ်/မဟုတ် စစ်ဆေးပါမယ်
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // 2. ရှိပြီးသားဆိုရင် quantity ကို +1 တိုးပါမယ်
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // 3. မရှိသေးဘူးဆိုရင် quantity ကို 1 အဖြစ် သတ်မှတ်ပြီး cart ထဲ အသစ်ထည့်ပါမယ်
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id:number) =>{
        const updateItems =
            cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(updateItems);
    }
    const value={addToCart,removeFromCart,cartItems};

    return (
        <CartContext value={value}>
            {children}
        </CartContext>
    )
}

export function useCartContext() {
    const context= useContext(CartContext);
    if(context == null) throw new Error("Creating Error in Context");
    return context;
}

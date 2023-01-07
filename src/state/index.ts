import { createSignal } from "solid-js";
import { CartItem, Product } from "../models";

export const [dark, setDark] = createSignal(false);

export const [products, setProducts] = createSignal<Product[]>([]);

export const [cart, setCart] = createSignal<CartItem[]>([]);

export const [searchQuery, setSearchQuery] = createSignal<string>("");

export const [cartSize, setCartSize] = createSignal<number>(0);

export const addToCart = (item: CartItem) => {
    setCart([
        ...cart(),
        item
    ])
    setCartSize(cart().length);
};

export const removeFronCart = (itemId: number | string) => {
    const foundIndex = cart().findIndex(item => item.id === itemId);

    if (foundIndex > -1) {
        setCart([
            ...cart().slice(0, foundIndex),
            ...cart().slice(foundIndex + 1)
        ]);
        setCartSize(cart().length);
    }
};

export const clearCart = () => (setCart([]));
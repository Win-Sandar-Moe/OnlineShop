import type {Product} from "../api/Product.ts";
import {useEffect, useState} from "react";
import {getProducts} from "../api/ProductApi.ts";


export default function useProduct() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);
    return {products};
}
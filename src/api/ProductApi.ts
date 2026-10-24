import type {Product} from "./Product.ts";
import  axios from "axios";

const PRODUCTS_URL = "http://localhost:3000/products"

export const getProducts = async () :Promise<Product[]> =>{
    const response = await axios.get(PRODUCTS_URL);
    if(response.status !== 200){
        throw new Error("Failed to fetch products");
    }
    return response.data;
}
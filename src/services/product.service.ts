import { Product } from "../models";


export const retrieveProducts = async (): Promise<Array<Product>> => (await fetch("https://fakestoreapi.com/products")).json();

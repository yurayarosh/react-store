import { useMemo } from "react";
import { IProduct } from "../store/types/products";

export const useProductsAmount = (products: IProduct[]) => useMemo<number>(() => {
  return products.reduce((sum, product) => sum + product.price, 0)
}, [products])
import {IProduct} from "../../../types/products"


const sushiProducts: IProduct[] = [
  
];

export function getSushiProducts(): IProduct[] {
  return sushiProducts;
}

export function setSushiProducts(newProducts: IProduct[]): void {
  sushiProducts.length = 0;
  sushiProducts.push(...newProducts);
}
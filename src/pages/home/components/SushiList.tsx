// SushiList.tsx
import React, { useState, useEffect } from "react";
import { getProducts } from "../../../api/products";
import { IProductList } from "../../../types/products";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: string;
  weight: string;
}

const SushiList: React.FC = () => {
  const [sushiProducts, setSushiProducts] = useState<IProductList[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();

      setSushiProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(sushiProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Sushi Products</h2>
      <ul>
        {sushiProducts.map((product: any) => {
          console.log(product);

          return (
            <li key={product._id}>
              <div>
                <h3>{product.category_name}</h3>
                <div></div>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Weight: {product.weight}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SushiList;

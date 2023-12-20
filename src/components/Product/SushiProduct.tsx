// SushiProduct.tsx
import React from "react";
import { IProductList } from "../../types/products";
import "./productStyle.scss";

interface SushiProductProps {
  product: IProductList;
}

const SushiProduct: React.FC<SushiProductProps> = ({ product }) => {
  return (
    <div className="sushi-product">
      <h3>{product.category_name}</h3>

      {/* Check if the product has items and map through them */}
      {product.items && product.items.length > 0 && (
        <div>
          <ul>
            {product.items.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}</p>
                <p>Weight: {item.weight}</p>
                <img src={item.image}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SushiProduct;

// SushiProduct.tsx
import React from "react";
import {IProductList} from "../../types/products";
import "./productStyle.scss";
import Stepper from "../Stepper/Stepper";

interface SushiProductProps {
  product: IProductList;
  addToCart: (product : IProductList) => void;
}

const SushiProduct: React.FC<SushiProductProps> = ({ product,addToCart }) => {
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
                <p>Price: ${item.price}</p>
                <p>Weight: {item.weight}g</p>
                <button onClick={() => addToCart({...product, items:[item]})}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default SushiProduct;

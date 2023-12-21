
import React from "react";
import { IProductList } from "../../types/products";


interface CartItemProps {
  item: IProductList ;
  removeFromCart: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <li>
      <div>
        {item.items.map((product, index)=>(
          <div key={index}>
            <p>{product. name}</p>
            <p>Price: ${product. price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
        <button onClick={() => removeFromCart(item.items[0]._id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;

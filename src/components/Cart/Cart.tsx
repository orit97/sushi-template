// components/Cart/Cart.tsx
import React from "react";
import CartItem from "./CartItem";
import { IProductList } from "../../types/products";

interface CartProps {
  cartItems: IProductList[];
  removeFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.items[0].price), 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <React.Fragment>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.category_name} item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
          <p>Total: ${calculateTotal().toFixed(2)}</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;

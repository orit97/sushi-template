// SushiList.tsx
import React, { useState, useEffect } from "react";
import { getProducts } from "../../api/products";
import { getCategories } from "../../api/categories";
import { IProductList } from "../../types/products";
import { ICategory } from "../../types/categories";
import SushiProduct from "../Product/SushiProduct";
import Cart from "../Cart/Cart";
import "./listStyle.scss";

const SushiList: React.FC = () => {
  const [sushiProducts, setSushiProducts] = useState<IProductList[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();

      setSushiProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();

      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const addToCart = (product: IProductList) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find(
      (item) => item.items[0]._id === product.items[0]._id
    );

    if (existingProduct) {
      // Product is already in the cart, update the quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.items[0]._id === existingProduct.items[0]._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Product is not in the cart, add it with quantity 1
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.items[0]._id !== itemId);
    });
  };

  return (
    <div className="sushi-list-container">
      <h2>Sushi Categories</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category._id}
            className={category._id === selectedCategory ? "active" : ""}
            onClick={() => handleCategoryClick(category._id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <h2>Sushi Products</h2>
      <div className="sushi-list">
        {sushiProducts
          .filter((product) =>
            selectedCategory ? product.category_id === selectedCategory : true
          )
          .map((product) => (
            <div key={product.category_id} className="sushi-list-item">
              <SushiProduct product={product} addToCart={addToCart} />
            </div>
          ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default SushiList;

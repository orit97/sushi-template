// SushiList.tsx
import React, { useState, useEffect } from "react";
import { getProducts } from "../../api/products";
import { getCategories } from "../../api/categories";
import { IProductList } from "../../types/products";
import { ICategory } from "../../types/categories";
import SushiProduct from "../Product/SushiProduct";
import "./listStyle.scss";

const SushiList: React.FC = () => {
  const [sushiProducts, setSushiProducts] = useState<IProductList[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
              <SushiProduct product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SushiList;


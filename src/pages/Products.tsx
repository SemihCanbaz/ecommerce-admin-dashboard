import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts, selectAllProducts } from "../redux/slices/productSlice";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../styles/App.css";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => selectAllProducts(state));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="products">
      <h2>Ürünler</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} TL
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

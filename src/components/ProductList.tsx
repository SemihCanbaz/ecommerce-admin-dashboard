import React from "react";
import { Product } from "../redux/slices/productSlice";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      <h3>Mevcut Ürünler</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} TL
            <button>Düzenle</button>
            <button>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

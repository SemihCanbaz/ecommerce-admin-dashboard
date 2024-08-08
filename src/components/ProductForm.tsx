import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda

const ProductForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct({ name, price: parseFloat(price) }));
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Yeni Ürün Ekle</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ürün Adı"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Fiyat"
      />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default ProductForm;

import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice"; // Doğru import
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h1>Uygulama Başlığı</h1>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </header>
  );
};

export default Header;

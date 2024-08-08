import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/products">Ürünler</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Siparişler</NavLink>
          </li>
          <li>
            <NavLink to="/users">Kullanıcılar</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

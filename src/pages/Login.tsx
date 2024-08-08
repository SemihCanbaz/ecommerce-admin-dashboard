import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice"; // login işlevi
import { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../styles/App.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error: any) => {
        console.error("Login failed: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Kullanıcı Adı"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Şifre"
      />
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default Login;

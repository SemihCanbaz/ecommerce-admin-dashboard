import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, selectAllOrders } from "../redux/slices/orderSlice";
import { RootState, AppDispatch } from "../redux/store";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../styles/App.css";

const Users: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => selectAllOrders(state));

  useEffect(() => {
    dispatch(fetchOrders() as any);
  }, [dispatch]);

  return (
    <div className="orders-page">
      <h2>Siparişler</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.id} - {order.total} TL
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

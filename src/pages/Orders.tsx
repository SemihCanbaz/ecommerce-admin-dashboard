import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchOrders, selectAllOrders } from "../redux/slices/orderSlice";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../styles/App.css";

const Orders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => selectAllOrders(state));

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="orders-page">
      <h2>Siparişler</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Toplam</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.total} TL</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

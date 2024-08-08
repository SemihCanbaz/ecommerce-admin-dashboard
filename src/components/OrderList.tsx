import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchOrders, selectAllOrders } from "../redux/slices/orderSlice";
import { Order } from "../redux/slices/orderSlice"; // Import the Order type
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda

const OrderList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector((state: RootState) => selectAllOrders(state));

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="order-list">
      <h2>Siparişler</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Toplam</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
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

export default OrderList;

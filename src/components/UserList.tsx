import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchUsers, selectAllUsers } from "../redux/slices/userSlice";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => selectAllUsers(state));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-list">
      <h2>Kullanıcılar</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

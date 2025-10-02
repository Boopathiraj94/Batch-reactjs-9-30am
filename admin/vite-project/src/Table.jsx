import React, { useState, useEffect } from "react";
import axios from "axios";

const CrudTable = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // ✅ READ (Fetch all users)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  // ✅ CREATE (Add new user)
  const addUser = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(res => {
        setUsers([...users, res.data]);
        setNewUser({ name: "", email: "" });
      })
      .catch(err => console.error(err));
  };

  // ✅ UPDATE (Edit user by ID)
  const updateUser = (id) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
      name: "Updated User",
      email: "updated@email.com"
    })
      .then(res => {
        setUsers(users.map(user => (user.id === id ? res.data : user)));
      })
      .catch(err => console.error(err));
  };

  // ✅ DELETE (Remove user by ID)
  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD Example with Axios + Table</h2>

      {/* CREATE FORM */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* READ DATA IN TABLE */}
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => updateUser(user.id)}>Update</button>{" "}
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;

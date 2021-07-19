import axios from "axios";
import React, { useEffect, useState } from "react";

const UserForm = () => {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState({ username: "" });

  const getUserData = async () => {
    const users = await axios.get("http://localhost:4000/api/users");
    setUsers(users.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleUserChange = (e) => {
    setUsername({
      username: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", username);
    getUserData();
    setUsername({ username: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    getUserData();
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="card card-body bg-dark">
            <form onSubmit={handleSubmit}>
              <h5 className="mb-0">Create User:</h5>
              <div className="form-group">
                <input
                  type="text"
                  value={username.username}
                  className="form-control"
                  onChange={handleUserChange}
                />
              </div>
              <button type="submit" className="btn btn-sm btn-light mt-3">
                Create User
              </button>
            </form>
          </div>
        </div>
        <div className="col-8">
          <ul className="list-group">
            {users.map((user, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action"
                onDoubleClick={() => handleDelete(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserForm;

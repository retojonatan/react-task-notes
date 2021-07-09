import axios from "axios";
import React, { useEffect, useState } from "react";

const UserForm = () => {
  const initialState = [{}];

  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    const getUserData = async () => {
      const users = await axios.get("http://localhost:4000/api/users");
      setUsers(users.data);
    };
    getUserData();
  }, []);

  return (
    <div>
      users:{" "}
      {users.map((user) => {
        return <p>{user.username}</p>;
      })}{" "}
    </div>
  );
};

export default UserForm;

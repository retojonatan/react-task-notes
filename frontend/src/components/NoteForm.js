import axios from "axios";
import React, { useEffect, useState } from "react";

const NoteForm = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const users = await axios.get("http://localhost:4000/api/users");
    setUsers(users.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSubmitNote = (e) => {
    e.preventDefault();
  };

  const onSelectChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card card-body text-dark">
          <h4>Create a note</h4>
          <form onSubmit={handleSubmitNote}>
            <div className="form-group">
              <select
                name="userSelected"
                className="form-control"
                onChange={onSelectChange}
              >
                {users.map((user) => {
                  return (
                    <option value={user.username} key={user._id}>
                      {" "}
                      {user.username}{" "}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" />
            </div>

            <button className="btn btn-sm btn-dark mt-3" type="submit">
              Save Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;

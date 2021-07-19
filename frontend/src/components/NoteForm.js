import axios from "axios";
import es from "date-fns/locale/es";
import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);
setDefaultLocale("es");

const NoteForm = () => {
  const initialState = {
    userSelected: "",
    title: "",
    content: "",
  };
  const [users, setUsers] = useState([]);
  const [userNote, setUserNote] = useState(initialState);
  const [date, setDate] = useState(new Date());

  const getUserData = async () => {
    const users = await axios.get("http://localhost:4000/api/users");
    setUsers(users.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSubmitNote = async (e) => {
    e.preventDefault();
    const newNote = {
      title: userNote.title,
      content: userNote.content,
      author: userNote.userSelected,
      date,
    };
    await axios.post("http://localhost:4000/api/notes", newNote);
  };
  const handleDate = (date) => {
    setDate(date);
  };

  const onSelectChange = (e) => {
    setUserNote({ ...userNote, [e.target.name]: e.target.value });
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
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                onChange={onSelectChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                name="content"
                placeholder="content"
                onChange={onSelectChange}
                rows={2}
                required
              />
            </div>

            <div className="form-group">
              <DatePicker
                className="mt-3 form-control"
                selected={date}
                onChange={handleDate}
                locale="es"
                required
              />
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

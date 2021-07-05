const express = require("express");
const cors = require("cors");
const notesRoute = require("./routes/notes");
const usersRoute = require("./routes/users");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.use("/api/notes", notesRoute);
app.use("/api/users", usersRoute);

app.set("port", process.env.PORT || 3000);

module.exports = app;

import "bootswatch/dist/materia/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={NotesList} />
          <Route path="/note/create/" component={NoteForm} />
          <Route path="/note/edit/:id" component={NoteForm} />
          <Route path="/user/create/" component={UserForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notas = await Note.find();
  res.json(notas);
};

notesCtrl.getNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note(req.body);
  await newNote.save();
  res.json({ message: "note created" });
};

notesCtrl.createNote = (req, res) => {
  res.json("post");
};

notesCtrl.updateNote = (req, res) => {
  res.json("put");
};

notesCtrl.deleteNote = (req, res) => {
  res.json("delete");
};

module.exports = notesCtrl;

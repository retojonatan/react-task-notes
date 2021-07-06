const Note = require("../models/Note");

const notesCtrl = {};

notesCtrl.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
  }
};

notesCtrl.getNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    if (note) {
      res.json(note);
    } else {
      res.status(204).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error(error);
  }
};

notesCtrl.createNote = async (req, res) => {
  try {
    const { title, content, date, author } = req.body;
    const newNote = new Note({ title, content, date, author });
    await newNote.save();
    res.json({ message: "Note created" });
  } catch (error) {
    console.error(error);
  }
};

notesCtrl.updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content, author } = req.body;
    const note = await Note.findByIdAndUpdate(id, { title, content, author });
    if (note) {
      res.json(note);
    } else {
      res.status(204).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error(error);
  }
};

notesCtrl.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findByIdAndDelete(id);
    if (note) {
      res.json(note);
    } else {
      res.status(204).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = notesCtrl;

const { NoteModel } = require("../models/Note");

// controladores que renderizan páginas
const getAllNotes = async (req, res) => {
  const allNotes = await NoteModel.findAll();

  res.render("index", { allNotes });
};

const formCreateNewNote = async (req, res) => {
  res.render("new-note");
};

const formUpdateNote = async (req, res) => {
  const noteId = req.params.id;

  const note = await NoteModel.findByPk(noteId);

  if (!note) {
    return res.redirect("/notes");
  }

  res.render("update-note", { note });
};

// controladores que efectuan cambios en la base de datos y redireccionan
const createNote = async (req, res) => {
  const { author, content } = req.body;

  await NoteModel.create({ author, content });

  res.redirect("/notes");
};

const updateNote = async (req, res) => {
  const { id, author, content } = req.body;

  const note = await NoteModel.findByPk(id);

  await note.update({ author, content });

  res.redirect("/notes");
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;

  const note = await NoteModel.findByPk(noteId);

  await note.destroy();

  res.redirect("/notes");
};

module.exports = {
  getAllNotes,
  formCreateNewNote,
  createNote,
  formUpdateNote,
  updateNote,
  deleteNote,
};

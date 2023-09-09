const { Router } = require("express");
const {
  getAllNotes,
  formCreateNewNote,
  formUpdateNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../src/controllers/notes.controllers");

const router = Router();

router.get("/", getAllNotes);
router.get("/create", formCreateNewNote);
router.get("/update/:id", formUpdateNote);
router.get("/delete/:id", deleteNote);

router.post("/", createNote);
router.post("/update", updateNote);

module.exports = router;

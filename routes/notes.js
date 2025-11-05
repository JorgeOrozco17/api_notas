const express = require("express");
const router = express.Router();

let notes = [];

// Obtener todas las notas
router.get("/", (req, res) => {
  res.json(notes);
});

// Agregar una nueva nota
router.post("/", (req, res) => {
  const { text } = req.body;
  const note = { id: Date.now(), text };
  notes.push(note);
  res.json(note);
});

module.exports = router;

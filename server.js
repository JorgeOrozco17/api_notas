const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Datos simulados de usuario
let users = [{ username: "admin", password: "1234" }];

// RUTA DE LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) return res.json({ success: true });
  res.status(401).json({ success: false, message: "Credenciales incorrectas" });
});

// Importar rutas de notas
const notesRouter = require("./routes/notes");
app.use("/notes", notesRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ API lista en http://localhost:${PORT}`));

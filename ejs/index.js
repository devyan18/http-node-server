const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(express.static("public"));

app.set("view engine", "ejs");

const notas = [
  {
    titulo: "primer nota",
    contenido: "contenido de la primer nota",
  },
  {
    titulo: "segunda nota",
    contenido: "contenido de la segunda nota",
  },
  {
    titulo: "tercera nota",
    contenido: "contenido de la tercera nota",
  },
  {
    titulo: "cuarta nota",
    contenido: "contenido de la cuarta nota",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/mis-notas", (req, res) => {
  res.render("mis-notas", { titulo: "Página principal", notas });
});

app.listen(4000, () => {
  console.log("server on port 4000");
});

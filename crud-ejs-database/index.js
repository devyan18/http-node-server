const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database");
require("./src/models/Note");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// para configurar en donde va a estar la carpeta de views
app.set("views", __dirname + "/src/views");

// para configurar en donde va a estar la carpeta public
app.use(express.static("public"));

// // para configurar el motor de plantillas
app.set("view engine", "ejs");

app.use("/notes", require("./routes/notes.routes"));

app.listen(4000, () => {
  sequelize.sync({ force: false });

  console.log("server on port 4000");
});

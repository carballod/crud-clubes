const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const multer = require("multer");
const PORT = 8080;

// configuracion de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ dest: "public/uploads/images", storage });
app.use(upload.single("image"));

// configuracion de handlebars
app.set("views", "./src/views");
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: "./src/views/layouts",
  })
);
app.set("view engine", ".hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/uploads/images"));

app.use(require("./src/routes/index"));

app.listen(PORT);
console.log(`Listen in http://localhost:${PORT}`);

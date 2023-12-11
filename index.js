const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 8080;

// configuracion de handlebars
app.set("views", "./src/views");
app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout:"main", layoutsDir: "./src/views/layouts" }));
app.set("view engine", ".hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./src/routes/index'));

app.listen(PORT);
console.log(`Listen in http://localhost:${PORT}`);

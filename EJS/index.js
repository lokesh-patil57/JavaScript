const express = require("express");
const path = require("path");
const app = express();


let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port 8080`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

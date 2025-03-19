const express = require("express");
const path = require("path");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port 8080`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/rolldie", (req, res) => {
  let dieRoll = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: dieRoll });
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params
    res.render("instagram.ejs", { username });
  });
  
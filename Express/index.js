const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`app listining on port ${port}`);
});

//  

// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   let str = `<h1>Welcome to Profile of @${username}</h1>`;
//   res.send(str);
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>nothing searched</h1>")
  }
 
  res.send( `<h1>result for the query : ${q}</h1>`);
});
app.use((req, res) => {
  console.log("request recieved");
  let code = "<h1>Darshan Bari</h1><li>Software Developer</li><li>HTML</li></li><li>CSS</li></li><li>JavaScript</li>"
  res.send(code)
});

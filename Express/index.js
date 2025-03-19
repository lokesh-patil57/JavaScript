const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`app listining on port ${port}`);
});
app.use((req, res) => {
  // console.log(req);
  console.log("request recieved");
  let code = "<h1>Darshan Bari</h1><li>Software Developer</li><li>HTML</li></li><li>CSS</li></li><li>JavaScript</li>"
  res.send(code)
});

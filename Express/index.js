const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`app listining on port ${port}`);
});

app.get("/", (req , res) =>{
  res.send("<h1>Darshan Bari</h1><li>Software Developer</li><li>HTML</li></li><li>CSS</li></li><li>JavaScript</li>");
  
})
app.get("/bio", (req , res) =>{
  res.send("Engineering student with strong analytical skills and hands-on experience in [relevant tools/software]. Passionate about innovation, problem-solving, and applying technical expertise to real-world ");
  
})
app.get("/experi", (req , res) =>{
  res.send("Grand Finalist of SIH 2024 ( Smart India Hackathon ) at IIT Tirupati . Our Problem Statement SIH1642 , it comes under Ministry of AYUSH . Our Aim was to Design a Registration Portal for AYUSH Startup to Enhance efficiency , Transparency and Accessibility . I gained useful skills Leadership quality , Team management , tackling real time problems .  ");
  
})

app.get("/:username/:id", (req , res) =>{
  let {username , id} = req.params
  let str = `<h1>Welcome to Profile of @${username}</h1>`
  res.send(str);
  
})
// app.use((req, res) => {
//   console.log("request recieved");
//   let code = "<h1>Darshan Bari</h1><li>Software Developer</li><li>HTML</li></li><li>CSS</li></li><li>JavaScript</li>"
//   res.send(code)
// });

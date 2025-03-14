let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    console.log(res);
    return res.json()
  })
  .then((data) =>{
    console.log("Data Fact =",data.fact);
    
  })
  .catch((err) => {
    console.log(`Error 404`, err);
  });

fetch(url);


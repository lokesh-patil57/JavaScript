// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json()
//   })
//   .then((data) =>{
//     console.log("Data Fact =",data.fact);
    
//   })
//   .catch((err) => {
//     console.log(`Error 404`, err);
//   });

// fetch(url);


let url = "https://catfact.ninja/fact";

async function getReq() {
  try {
    let res = await fetch(url)
  let data  = await res.json()
  console.log(data);
  console.log("fact =",data.fact);
  
  
  } catch (error) {
    console.log(`Error 404`);
    
  }
  
}

getReq()

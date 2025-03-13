function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success :Data Saved to DataBase");
    } else {
      reject("Failuare: Weak connection");
    }
  });

}

savetoDb("luckypatil")
.then ((result) => {
  console.log('data 1 : Data Saved');
  console.log('Promies result 1 :',result);
  
  return savetoDb("ganeshpatil")
})
.then((result) => {
  console.log('data 2 : Data Saved');
  console.log('Promies result 2 :',result);
  return savetoDb("Lilapatil")
})
.then ((result) => {
  console.log('data 3 : Data Saved');
  console.log('Promies result 3 :',result);
})
.catch ((error) => {
  console.log('Weak Connection');
  console.log('Promies result  :',error);
  
})
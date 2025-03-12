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
.then (() => {
  console.log('data 1 : Data Saved');
  return savetoDb("ganeshpatil")
})
.then(() => {
  console.log('data 2 : Data Saved');
  return savetoDb("Lilapatil")
})
.then (() => {
  console.log('data 3 : Data Saved');
})
.catch (() => {
  console.log('Weak Connection');
  
})
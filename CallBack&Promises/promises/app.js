function savetoDb(data) {
  return Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success :Data Saved to DataBase");
    } else {
      reject("Failuare: Weak connection");
    }
  });
}

s

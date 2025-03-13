let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color Changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("Color Changed to Red");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("Color Changed to Green");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("Color Changed to Blue");
  })

  .catch((error) => {
    console.log("Color Not Changed");
  });

// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("blue", 1000, () => {
//       changeColor("yello", 1000, () => {
//         changeColor("purple", 1000);
//       });
//     });
//   });
// });

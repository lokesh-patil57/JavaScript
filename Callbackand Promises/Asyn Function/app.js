let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 5) + 1;
    if (num > 3) {
      reject("Promies");
    }
    h1.style.color = color;

    setTimeout(() => {
      console.log(`color Changed to : ${color}`);

      resolve("Color Changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("orange", 1000);
  } catch (error) {
    console.log("error was caught");
    console.log("error");
  }
  let a = 3;
  console.log("a = ", a);
  console.log(`new num : `, a + 3);
}

demo();

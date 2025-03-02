let bton = document.querySelector(".btn");

bton.addEventListener("click", function () {
  let head = document.querySelector("h3");
  let getColor = RandColor();
  head.innerText = getColor;

  let boxx = document.querySelector(".box");
  boxx.style.backgroundColor = getColor;
  console.log("Color Updated");
});

function RandColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = 'rgb(${red}, ${green} , ${blue} )';
  return color;
}

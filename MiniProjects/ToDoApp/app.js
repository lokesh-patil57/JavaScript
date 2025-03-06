let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
    let item = document.createElement("li");
  item.textContent = inp.value;
  ul.appendChild(item);
  inp.value = "";
});

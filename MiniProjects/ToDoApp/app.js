let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.textContent = inp.value;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});


ul.addEventListener( 'click' , function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement
    listItem.remove()
    console.log('Deleted');
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

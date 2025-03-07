let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let btns = ["green", "orange", "red", "purple"];
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;

    levelUp();
  }
});

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 500);
}


function gameFlash(btn) {
  btn.classList.add("flashBtn");
  setTimeout(function () {
    btn.classList.remove("flashBtn");
  }, 500);
}

function levelUp() {
  level++;
  h2.textContent = "Level " + level;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);

  gameFlash(randBtn); 
}

function btnPress() {
  console.log(this);
  let btn = this
  gameFlash(btn)
  
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress );
}
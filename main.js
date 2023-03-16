// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let selectedColor = document.querySelector("#current-color");

let options = document.querySelectorAll(".color");

for (let option of options) {
  option.addEventListener("click", () => {
    selectedColor.style.background = option.style.background;
  });
}

let canvas = document.querySelectorAll("#canvas div");

for (let cell of canvas) {
  cell.addEventListener("click", () => {
    cell.style.background = selectedColor.style.background;
  });
}

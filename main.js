// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let palette = document.querySelectorAll(".color");
let current = document.querySelector("#current-color");

for (let color of palette) {
  color.addEventListener("click", () => {
    current.style.backgroundColor = color.style.backgroundColor;
  });
} //changes color of current color box on click

let canvasCells = document.querySelectorAll(".cell");

for (let cell of canvasCells) {
  cell.addEventListener("click", () => {
    cell.style.background = current.style.backgroundColor;
  });
} //changes color of cell on click

// make a save  button that saves the current cell state

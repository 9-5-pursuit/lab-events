// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let palettes = document.querySelectorAll("#palette .color");
let currentColor = document.querySelector("#current-color");
for (let palette of palettes) {
   palette.addEventListener("click", (event) => {
  currentColor.style.backgroundColor = event.target.style.backgroundColor; 
  })
}

let cells = document.querySelectorAll("#canvas .cell");
for (let cell of cells) {
 cell.addEventListener("click", () => {
cell.style.backgroundColor = currentColor.style.backgroundColor;
 });
}
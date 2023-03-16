// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let colorArray = document.querySelectorAll(".color");
let currentColor = document.querySelector("#current-color");


colorArray.forEach((color) => {
  color.addEventListener("click" , () => {
    currentColor.style.background = color.style.background;
  })
})

let cells = document.querySelectorAll(".cell");


// When coloring in the tiles, I gave the cells an Event Listener where each tile will change color when the mouse hovers over it. Giving it a glide effect.

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.background = currentColor.style.background;
  })
})


let button = document.querySelector(".button");

button.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.background = "white";
  })
})
// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//
const colorsArray = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");
// console.log(currentColor);
for (let color of colorsArray) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
}

//
const cellsArray = document.querySelectorAll(".cell");
// console.log(cells);
for (let cell of cellsArray) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
}

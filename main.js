// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const current = document.getElementById("current-color");
const color = document.querySelectorAll(".color");
const cell = document.querySelectorAll(".cell");

color.forEach((color) => {
  color.addEventListener("click", () => {
    current.style.background = color.style.background;
    console.log(color);
  });
});


// Updating from cell to the current color
cell.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = current.style.background;
    console.log(cell);
  });
});

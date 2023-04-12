// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelectorAll("#palette div.color");
const currentColor = document.querySelector("#current-color");

for (let color of palette) {
  color.addEventListener("click", () => {
    const colorPicked = color.style.background;
    currentColor.style.backgroundColor = colorPicked;
  });
}

const paintCells = document.querySelectorAll("main div.cell");
for (let cell of paintCells) {
  cell.addEventListener("click", () => {
    const currentColorBackground = currentColor.style.backgroundColor;
    cell.style.backgroundColor = currentColorBackground;
  });
}
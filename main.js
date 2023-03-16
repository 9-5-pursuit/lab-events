// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelector("#palette");
const divList = palette.querySelectorAll("div");
for (let color of divList) {
  color.addEventListener("click", () => {
    currentColor = document.querySelector("#current-color");
    currentColor.style.background = color.style.background;
  });
}

const cells = document.querySelectorAll("#canvas .cell");
for (let cell of cells) {
  cell.addEventListener("click", () => {
    currentColor = document.querySelector("#current-color");
    cell.style.background = currentColor.style.background;
  });
}

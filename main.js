// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palettes = document.querySelectorAll("#palette .color");
console.log(palettes);
const currentColors = document.querySelector("#current-color");
console.log(currentColors);
for (let palette of palettes) {
palette.addEventListener("click", () => {
  currentColors.style.background = palette.style.background;
})
}
    
const cells = document.querySelectorAll(".cell");
console.log(cells);
for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColors.style.background;
  })
}
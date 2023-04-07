// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.getElementById("current-color");
const paletteColors = document.querySelectorAll("#palette .color");

for (let color of paletteColors) {
  color.addEventListener("mousedown", () => {
    const selectedColor = color.getAttribute("style");
    currentColor.setAttribute("style", selectedColor);
  });
}

const cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.addEventListener("click", () => {
      cell.setAttribute("style", "background:" + currentColor.style.background)
    })
  }
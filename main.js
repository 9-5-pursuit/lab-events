// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
document.querySelector("body").style.background = "radial-gradient(white, azure)"

let currentColor = document.querySelector("#current-color");
let paletteColors = document.querySelectorAll(".color");
let cells = document.querySelectorAll(".cell");

function changeCurrentColor() {
  for (let color of paletteColors) {
    color.addEventListener("click", () => {
      currentColor.style.background = color.style.background
    })
  }
}

for (let color of paletteColors) {
  color.addEventListener("mousedown", changeCurrentColor);
}

function changeCellColor() {
  for (let cell of cells) {
    cell.addEventListener("click", () => {
      cell.style.background = currentColor.style.background
    })
  }
}

for (let cell of cells) {
  cell.addEventListener("mousedown", changeCellColor);
}

let button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Reset cell colors";
button.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.background = "white";
  }
})
document.querySelector("body").append(button);

let button2 = document.createElement("button");
button2.setAttribute("type", "button");
button2.textContent = "Make all cells selected color";
button2.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.background = currentColor.style.background;
  }
})
document.querySelector("body").append(button2);
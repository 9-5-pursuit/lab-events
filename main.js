// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//Declaring variables to access colors , pallete and cells in the grid the interactive parts
let currentColor = document.querySelector("#current-color");
const colorSelector = document.querySelectorAll(".color");
let cells = document.querySelectorAll(".cell");

//Selecting the color from the palette with a click and storing it into current color
//iterate through the colors and when the click is triggered that value gets stored into variable then set attribute dynamically TEMp LITS
for (let color of colorSelector) {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("style");
    currentColor.setAttribute("style", `${selectedColor}`);
  });
}

//With stored color in current color, apply color to the canvas
//access the canvas (its a grid)
// iterating through
const canvasPixels = document.querySelectorAll(".cell");

for (let pixel of canvasPixels) {
  pixel.addEventListener("mousedown", () => {
    const paint = currentColor.getAttribute("style");
    pixel.setAttribute("style", `${paint}`);
  });
}
let buttonReset = document.createElement("button");
buttonReset.setAttribute("type", "button");
buttonReset.textContent = "Reset";
buttonReset.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.background = "white";
  }
});

document.querySelector("body").append(buttonReset);

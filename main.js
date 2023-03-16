// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//...When a color is clicked in the #palette, the #current-color element should have its background changed to that color. For example, if you click the green circle in the #palette, the #current-color element's background should change to be green.
const paletteColor = document.querySelectorAll("#palette .color");
const currentColor = document.querySelector("#current-color");

for (let color of paletteColor) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
}

//...When you click on a .cell, its background should change to match the background of #current-color.
const cellColor = document.querySelectorAll("#canvas .cell");
for (let cell of cellColor) {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
}

//...Create a button that, when clicked, resets all cells so that they all have a background of white.
const resetButton = document.createElement("button");
resetButton.id = "myButton";
resetButton.innerHTML = "Reset Color Button";
resetButton.style.background = "#3dfe3a";
resetButton.style.position = "absolute";
resetButton.style.left = "50%";
resetButton.style.transform = "translateX(-50%)";
document.body.appendChild(resetButton);

for (let cell of cellColor) {
  resetButton.addEventListener("click", () => {
    cell.style.background = "white";
  });
}

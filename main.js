// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// Should change the background of the `#current-color` div when a color is clicked

const colors = document.querySelectorAll(".color");
let currentColor = document.querySelector("#current-color");
//console.log(currentColor);

for (let color of colors) {
  color.addEventListener("click", () => {
    let attribute = color.getAttribute("style");
    //console.log(attribute);
    currentColor.setAttribute("style", `${attribute}`);
    //console.log(currentColor);
  });
}

// Should change cells to the currently selected color when clicked

let cells = document.querySelectorAll("#canvas div");

for (let cell of cells) {
  cell.addEventListener("click", () => {
    let attribute = currentColor.getAttribute("style");
    cell.setAttribute("style", `${attribute}`);
  });
}

// Create a button that, when clicked, resets all cells so that they all have a background of white.

const button = document.querySelector(".button");

for (let cell of cells) {
  button.addEventListener("click", () => {
    cell.setAttribute("style", `background: white`);
  });
}

// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let currentColor = document.querySelector("#current-color");
// this is the color that is being selected

let paletteColors = document.querySelectorAll(".color");
// these are the colors that are provided and can be chosen from

let cells = document.querySelectorAll(".cell");
// this is how i would be able to access the cells individually

for (let color of paletteColors) {
  // i am going to use this to loop through all of the colors that are provided in the palette
  color.addEventListener("click", () => {
    // at this point i am using the addEventListener
    let chosenColor = color.getAttribute("style");
    currentColor.setAttribute("style", `${chosenColor}`);
  });
}

for (let cell of cells) {
  cell.addEventListener("click", () => {
    let color = currentColor.getAttribute("style");
    cell.setAttribute("style", `${color}`);
  });
}

let button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Reset";
button.addEventListener("click", () => {
  for (let cell of cells) {
    cell.style.background = "white";
  }
});

document.querySelector("body").append(button);
button.setAttribute("background-color", "perriwinkle");

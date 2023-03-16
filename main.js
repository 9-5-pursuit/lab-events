// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colorPalette = document.querySelectorAll("#palette .color");
let currentColor = document.querySelector("#current-color");
let canvas = document.querySelectorAll(".cell");

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
});

canvas.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
});

// button to reset the canvas

let reset = document.createElement("button");
reset.id = "reset-button";
reset.innerText = "reset";
reset.style.display = "inline-block";
reset.style.position = "absolute";
reset.style.left = "50%";
reset.style.transform = "translateX(-50%)";
main.after(reset);

reset.addEventListener("click", () => {
  canvas.forEach((cell) => {
    cell.style.background = "white";
  });
});

// button to fill the entire canvas with the current color

let fill = document.createElement("button");
fill.innerText = "Fill All";
fill.id = "fill-button";
fill.style.display = "inline-block";
fill.style.position = "absolute";
fill.style.left = "50%";
fill.style.transform = "translateX(-50%)";
document.body.append(fill);

fill.addEventListener("click", () => {
  canvas.forEach((cell) => {
    cell.style.background = currentColor.style.background;
  });
});

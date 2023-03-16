// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const current = document.querySelector("#current-color");
const colorArr = document.querySelectorAll(".color");

for (let color of colorArr) {
  color.addEventListener("click", () => {
    current.style.background = color.style.background;
  });
}

const cellArr = document.querySelectorAll(".cell");

for (let cell of cellArr) {
  cell.addEventListener("click", () => {
    cell.style.background = current.style.background;
  });
}

// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.getElementById("palette");
const currentColor = document.getElementById("current-color");

for (let child of (palette.children)) {
  child.addEventListener("click", (event) => {
    currentColor.style.background = child.style.background;
  });
}

for (let cell of main.children) {
  cell.addEventListener("click", (event) => {
    cell.style.background = currentColor.style.background;
  });
}

// const colorAll = document.createElement("button");
// colorAll.append(palette);
// colorAll.textContent = "Paint all boxes with my current color";
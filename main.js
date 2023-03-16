// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// Get references to the color elements
const colors = document.querySelectorAll(".color");

// Get a reference to the current-color element
const currentColor = document.getElementById("current-color");

// Add a click event listener to each color element
colors.forEach((color) => {
  color.addEventListener("click", () => {
    // Get the background color of the clicked color element
    const bgColor = color.style.backgroundColor;

    // Set the background color of the current-color element to the clicked color
    currentColor.style.backgroundColor = bgColor;
  });
});

// Get references to the cells
const cells = document.querySelectorAll(".cell");

// Get a reference to the current-color element
const Color = document.getElementById("current-color");

// Add a click event listener to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Get the background color of the current-color element
    const bgColor = Color.style.backgroundColor;

    // Set the background color of the clicked cell to the current color
    cell.style.backgroundColor = bgColor;
  });
});

// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colors = document.querySelectorAll(`#palette .color`)
const currentColor = document.getElementById("current-color")


// let backgroundColor = document.querySelector("#current-color .color")
// // console.log(backgroundColor)

colors.forEach((color) => {
  color.addEventListener("click", () => {
   currentColor.style.background = color.style.background;
  
   const cells = document.querySelectorAll("#canvas .cell")

   cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.style.background = currentColor.style.background;
    })
  })
  })
   })
  



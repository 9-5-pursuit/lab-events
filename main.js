// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let colors = document.querySelectorAll(`#palette div`)
let currentColor = document.querySelector("#current-color")
let div = document.createElement("div")
currentColor.append(div)
div.classList.add("color")
div.setAttribute("style", "background:")

let backgroundColor = document.querySelector("#current-color .color")
console.log(backgroundColor)

// colors.forEach((color) => {
//   color.addEventListener("click", () => {
//   //  let style = document.querySelector(`#current-color style`) 
  
//    })
//    })
  





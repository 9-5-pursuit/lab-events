// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// listener
// const paragraph = document.querySelector("p");
// paragraph.addEventListener("click", () => {
//   console.log("You are clicking the first paragraph on the page!");
// });


// add multiple listeners
// const buttons = document.querySelectorAll("button");
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     console.log("A button was clicked!");
//   });
// }
// Adding event listeners dynamically-multiple list were added
// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     const ol = document.querySelector("ol");
//     const newLi = document.createElement("li");
//     newLi.textContent = "Click me to make more!";
//     ol.append(newLi);
//   });
// }


//canvas-cuurentcolor-palette-color
//1. query select current color then actual color 
//2.qs individual color
//3.run loop as list example above no consolelog change background
let currentColor = document.querySelector('current-color')

let colors = document.querySelectorAll(.color)

for (const color of colors){
 color.addEventListener('click,() =>'{
  currentColor.style.background = color.style.background
 })
}

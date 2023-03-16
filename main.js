// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector("#current-color");
const palettecolors = document.querySelectorAll("#palette .color"); 


for(let color of palettecolors){
 color.addEventListener("click", () =>{
  currentColor.style.background = color.style.background;
 });
}

const cells = document.querySelectorAll(".cell");
for(let cell of cells){
  cell.addEventListener("click", () => {
    cell.setAttribute("style","background:"+currentColor.style.background)
  });
};
 const resetBtn = document.querySelector('#reset');
 resetBtn.addEventListener("click", () => {
  cells.forEach((cell)=>{
    cell.removeAttribute("style");
  })
 }); 

 const fill = document.querySelector(`#fill`);
 fill.addEventListener("click", () =>{
  cells.forEach((cell)=>{
    cell.style.background = currentColor.style.background
  })
 });
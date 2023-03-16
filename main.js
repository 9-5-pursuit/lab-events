// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const selection = document.querySelectorAll("#palette .color")
const current_color = document.querySelector("#current-color")

for (let select of selection){
select.addEventListener("click",() => {
  current_color.style.background = select.style.background
})
}

const cells = document.querySelectorAll("#canvas .cell")
for(let cell of cells){
  cell.addEventListener("click",() =>{
    cell.style.background = current_color.style.background 

  })
}


const reset_White = document.querySelector(".changeToWhite button")

reset_White.addEventListener("click",() =>{
  for (let cell of cells) {
    cell.style.background = selection[selection.length-1].style.background
}
 })

 const current_Col = document.querySelector(".button2")

 current_Col.addEventListener("click", () =>{
  for(let cell of cells){
    cell.style.background = current_color.style.background 
  }
 })















// console.log(current_color.height)
// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colors = document.querySelectorAll("#palette .color");
  for (let color of colors){
    color.addEventListener("click", (event) => {
      const currentColor = document.querySelector("#current-color");
      currentColor.style.background = event.target.style.background 
    });
  }
  
  const cells = document.querySelectorAll(".cell")
  for (let cell of cells){
    cell.addEventListener("click", (event) => {
      const currentColor = document.querySelector("#current-color");
      event.target.style.background = currentColor.style.background 
    });
  }
  //I DID IT!!!!! It gave me such a rush to get it right!
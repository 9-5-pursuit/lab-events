// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector("#current-color");

const pcolor = document.querySelectorAll(".color");
for(let i=0; i<pcolor.length;i++)
{
  pcolor[i].addEventListener("click", () => {
   currentColor.setAttribute("style","background: "+pcolor[i].style.background);
  });
}

const cells = document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++)
{
  cells[i].addEventListener("click", () => {
   cells[i].setAttribute("style",`background: ${currentColor.style.background}`);
  });
}
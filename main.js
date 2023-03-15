// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colorPicked = document.querySelector("#palette");
console.log(colorPicked);
const currentColor = document.querySelector("#current-color");

colorPicked.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("color")) {
    const color = target.style.background;
    currentColor.style.background = color;
  }
});
/// #2

const emptyBox = document.querySelectorAll(".cell");
console.log(emptyBox);

emptyBox.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.background = currentColor.style.background;
  });
});

//     const target2 = event.target

//     target2.style.backgroundColor
//   });

// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


//When a color is clicked in the `#palette`, the `#current-color` element should have its background changed to that color. For example, if you click the green circle in the `#palette`, the `#current-color` element's background should change to be green.

//When you click on a `.cell`, its background should change to match the background of `#current-color`.
  const presentColor = document.getElementById("current-color");
  const paletteColors = document.querySelectorAll("#palette .color");

//event listener looks for particular types of events to occur on the DOM. then reacts and be attached to anything you can select in DOM

//click watches the amounts of user clicks on the target so in callback we can put what we want to be done

  // const colors = document.querySelectorAll("#palette .color");
    for (let color of paletteColors){
      color.addEventListener("click", (event) => {
        const presentColor = document.querySelector("#current-color");
        presentColor.style.background = event.target.style.background 
    });
  }

  const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.setAttribute("style", "background:" + presentColor.style.background);
  })
}
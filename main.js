// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

let c = document.querySelectorAll('#palette .color')
let col = document.querySelector('#current-color')

for (let s of c) {
  s.addEventListener('click', (event)=>{
    console.log(event.target.style.backgroundColor);
    col.style.backgroundColor = event.target.style.backgroundColor

  const maint = document.querySelectorAll("main div.cell");

  for (let c of maint) {
    c.addEventListener('click', () => {
      c.style.backgroundColor = col.style.backgroundColor

      let newb = document.createElement('button')

      newb.style.display = 'inline-block'
      newb.value = 'change grid color'

      let n = document.querySelector('header')

      n.append(newb)

      let buttona = document.querySelector('header button')

      buttona.addEventListener('click', () => {
        
      })


    })
  }
  })
}



// You may write your code here!

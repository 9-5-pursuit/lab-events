// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

let hform = document.querySelector('header h1')
hform.style.margin = '0'
hform.style.paddingTop = '25px'
hform.style.paddingBottom = '25px'

let newb = document.createElement('button')
newb.innerHTML = 'change grid color'
newb.hidden = 'true'

let n = document.querySelector('header')
n.style.display = 'flex'
n.style.alignItems = 'center'
n.style.justifyContent = 'space-between'

n.appendChild(newb)

let c = document.querySelectorAll('#palette .color')
let col = document.querySelector('#current-color')

for (let s of c) {
  s.addEventListener('click', (event) => {

    col.style.backgroundColor = event.target.style.backgroundColor

    const maint = document.querySelectorAll("main div.cell");
    for (let c of maint) {

      c.addEventListener('click', () => {
        c.style.backgroundColor = col.style.backgroundColor

        let buttona = document.querySelector('header button')
        buttona.style.display = 'inline-block'
        buttona.style.margin = '0 auto'
        buttona.style.marginLeft = '5%'
        buttona.addEventListener('click', () => {
          const maina = document.querySelectorAll("main div.cell");
          let colz = document.querySelector('#current-color')
          for (let z of maina) {
            z.style.backgroundColor = colz.style.backgroundColor
          }
        })
      })
    }
  })
}
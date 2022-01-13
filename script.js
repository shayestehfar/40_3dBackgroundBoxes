const boxes = document.getElementById('boxes')
const btn = document.getElementById('magic')

btn.addEventListener('click', () => {
  boxes.classList.toggle('big')
})

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const boxEl = document.createElement('div')
      boxEl.classList.add('box')
      boxEl.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxes.appendChild(boxEl)
    }
  }
}
createBoxes()

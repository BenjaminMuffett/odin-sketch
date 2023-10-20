let sideLength = 16;

const grid = document.querySelector('#grid')

// for (let i = 0; i < sideLength**2; i++) {
//     const canvas = document.createElement('div')
//     canvas.classList.add('canvas')
//     grid.appendChild(canvas)
// }

for (let i = 0; i < sideLength; i++) {
    const canvasLine = document.createElement('div')
    canvasLine.classList.add('line')
    for (let z = 0; z < sideLength; z++) {
        const canvas = document.createElement('div')
        canvas.classList.add('block')
        canvasLine.appendChild(canvas)
    }
    grid.appendChild(canvasLine)
}

const trail = document.querySelectorAll('.block')
trail.forEach((block) => {
   block.addEventListener('mouseover', () => {
    block.style.background = 'black'}) 
});




// trail.addEventListener('mouseover', (event) => {
//     event.target.style.color = 'black'
// })

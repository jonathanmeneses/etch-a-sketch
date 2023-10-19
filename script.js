let container = document.getElementById('grid-element')
let dimensionShapes = 64;
const squareDimensions = 400;
for (y = 0; y < dimensionShapes; y++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    container.appendChild(row)
    for (x = 0; x < dimensionShapes; x++) {
        const square = document.createElement('div')
        square.setAttribute('class', 'pixel')
        row.appendChild(square)
        square.style.width = `${(squareDimensions / dimensionShapes)}px`
        square.style.height = `${(squareDimensions / dimensionShapes)}px`

        row.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    }
}
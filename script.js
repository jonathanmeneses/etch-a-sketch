let container = document.getElementById('grid-element')
let initialDimShape = 16;
const squareDimensions = 700;

// Create Grid, starting with rows

function createGrid(n) {
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container')
    gridContainer.style.width = `${squareDimensions}px`
    gridContainer.style.height = `${squareDimensions}px`
    container.appendChild(gridContainer)
    for (y = 0; y < n; y++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        gridContainer.appendChild(row)
        for (x = 0; x < n; x++) {
            const square = document.createElement('div')
            square.setAttribute('class', 'pixel')
            square.style.backgroundColor = 'white'
            row.appendChild(square)

            row.addEventListener('mouseover', (e) => {
                if (e.target.style.backgroundColor == 'white') {
                    e.target.style.backgroundColor = random_rgba()
                }



            })

            square.style.width = `${(squareDimensions / n)}px`
            square.style.height = `${(squareDimensions / n)}px`


        }
    }
}


// Add Button to initiate prompt
const dimButton = document.createElement('button')
dimButton.setAttribute('class', 'config-button')
dimButton.innerText = 'Configure Grid'
dimButton.addEventListener('click', newGrid)
container.insertBefore(dimButton, container.firstChild)


createGrid(initialDimShape)

function newGrid() {
    let grid = document.querySelector('.grid-container')
    let gridDimensions = prompt('What is the size (size x size) of the grid you want? (max of 64)')
    gridDimensions = Number(gridDimensions)

    gridToCreate = Math.max(Math.min(gridDimensions, 64), 1)
    console.log(gridToCreate)
    grid.remove()
    createGrid(gridToCreate)

}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
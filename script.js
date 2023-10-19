let container = document.getElementById('grid-element')

for (y = 0; y < 16; y++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    container.appendChild(row)
    for (x = 0; x < 16; x++) {
        const square = document.createElement('div')
        square.setAttribute('class', 'pixel')
        row.appendChild(square)

        row.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    }
}
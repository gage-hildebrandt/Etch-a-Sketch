const container = document.getElementById('grid-container');

// Function to create the grid
function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            container.appendChild(gridItem); // Append each grid item to the container
        }
    }
}

// Call the createGrid function to create a 16x16 grid
createGrid(16, 16);


// Add border to the grid container
container.style.border = '1px solid black';
container.style.backgroundColor = 'red';



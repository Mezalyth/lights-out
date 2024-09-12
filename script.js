const cell = document.querySelectorAll('td');


function toggleCell(e) {
    const cell = this;
    const cellId = parseInt(cell.getAttribute('data-id'));

    const neighbors = [];

    if (cellId > 5) {
        neighbors.push(cellId - 5);
    }
    if (cellId % 5 !== 1) {
        neighbors.push(cellId - 1);
    }
    if (cellId % 5 !== 0) {
        neighbors.push(cellId + 1);
    }
    if (cellId <= 20) {
        neighbors.push(cellId + 5);
    }

    cell.classList.toggle('on');

    neighbors.forEach( id => {
        const neighbor = document.querySelector(`td[data-id="${id}"]`);
        if (neighbor) {
            neighbor.classList.toggle('on');
        }
    });
}   

cell.forEach(function(cell) {
    cell.addEventListener('click', toggleCell);
});


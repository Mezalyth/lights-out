const cells = document.querySelectorAll('td');
let moves = 0;
const moveCount = document.querySelector('h2');

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
    moves++;
    moveCount.textContent = `Moves: ${moves}`
    winCondition();
}   

cells.forEach(function(cell) {
    cell.addEventListener('click', toggleCell);
});


function winCondition() {
    let win = true;

    cells.forEach(function(cell) {
        if (cell.classList.contains('on')) {
            win = false;
        }
    });
        if (win) {
            document.querySelector('table').style.backgroundColor = '#0f2863';
            alert("Congratulations! You've won!");
        }
}

function gameReset() {
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', function() {
        cells.forEach(function(cell) {
            cell.classList.add('on');
        });
    moves = 0;
    moveCount.textContent = `Moves: ${moves}`;
    winCondition();
    });
}

gameReset();
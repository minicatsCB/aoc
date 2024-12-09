import data from "../data/day-4-part-1.json" assert { type: 'json' };

function searchInRows(board, regex) {
    return board.map(row => row.join(''))
        .map(stringifiedRow => stringifiedRow.match(regex) || [])
        .map(matches => matches.length)
        .reduce((acc, curr) => acc + curr, 0);
}

function searchInColumns(board, regex) {
    return board.map((_, index) => board.map(row => row[index]).join(''))
        .map(stringifiedColumn => stringifiedColumn.match(regex) || [])
        .map(matches => matches.length)
        .reduce((acc, curr) => acc + curr, 0);
}

function searchInDiagonals(board, regex) {
    const diagonals = [];
    // diagonals parallel to the \ diagonal (upper half)
    board.map((_, index) => {
        if(index > 0) {
            const diagonal = board.map((row, rowIndex) => row[index + rowIndex]).join('');
            diagonals.push(diagonal);
        }
    });
    // diagonals parallel to the \ diagonal (lower half)
    board.map((_, index) => {
        const diagonal = board.map((row, rowIndex) => row[rowIndex - index]).join('');
        diagonals.push(diagonal);
    });
    // diagonals parallel to the / diagonal (upper half)
    board.map((_, index) => {
        if(index > 0) {
            const diagonal = board.map((row, rowIndex) => row[row.length - 1 - rowIndex + index]).join('');
            diagonals.push(diagonal);
        }
    });
    // diagonals parallel to the / diagonal (lower half)
    board.map((_, index) => {
        const diagonal = board.map((row, rowIndex) => row[row.length - 1 - index - rowIndex]).join('');
        diagonals.push(diagonal);
    });


  /*   const greatestDiagonalLength = diagonals.reduce((acc, curr) => Math.max(acc, curr.length), 0);
    let greatestDiagonals = diagonals.filter(diagonal => diagonal.length === greatestDiagonalLength);

    const uniqueDiagonals = [...new Set(greatestDiagonals)];
    const seen = new Set();
    const filteredDiagonals = diagonals.filter(diagonal => {
        if (uniqueDiagonals.includes(diagonal)) {
            if (seen.has(diagonal)) {
                return false;
            } else {
                seen.add(diagonal);
                return true;
            }
        }
        return true;
    }); */

    return diagonals.map(diagonal => diagonal.match(regex) || [])
        .map(matches => matches.length)
        .reduce((acc, curr) => acc + curr, 0);
}

export function getCount(board = '') {
    let count = 0;
    const regex = /(?=(XMAS|SAMX))/g;

    count += searchInRows(board, regex);
    count += searchInColumns(board, regex);
    count += searchInDiagonals(board, regex);

    return count;
}
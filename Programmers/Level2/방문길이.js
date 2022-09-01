const solution = (dirs) => {
    // U D R L
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, 1, -1];
    
    const history = [];
    let dir = 0;
    let row = 0;
    let col = 0;
    
    const isOutOfRange = (r, c) => {
        if (r < -5 || r > 5 || c < -5 || c > 5) {
            return true;
        }
        return false;
    }
    
    const isVisited = (r, c, nr, nc) => {
        for (let j=0; j<history.length; j++) {
            if ((history[j][0] === r && history[j][1] === c
                 && history[j][2] === nr && history[j][3] === nc) ||
                (history[j][0] === nr && history[j][1] === nc
                 && history[j][2] === r && history[j][3] === c)) {
                    return true;
            }
        }
        return false;
    }
    
    for (let i=0; i<dirs.length; i++) {
        if (dirs[i] === 'U') dir = 0;
        else if (dirs[i] === 'D') dir = 1;
        else if (dirs[i] === 'R') dir = 2;
        else dir = 3
        
        nextRow = row + dr[dir];
        nextCol = col + dc[dir];
        
        if (isOutOfRange(nextRow, nextCol)) continue;
        
        let visited = false;
        if (isVisited(row, col, nextRow, nextCol)) visited = true;
        if (!visited) history.push([row, col, nextRow, nextCol]);
        
        row = nextRow;
        col = nextCol;
    }
    
    return history.length;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
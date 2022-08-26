const solution = (maps) => {
    let answer = -1;
    
    const N = maps.length;
    const M = maps[0].length;
    const dr = [-1, 0, 1, 0];
    const dc = [0, -1, 0, 1];
    
    const isOutOfRange = (row, col) => {
        if (row < 0 || row >= N || col < 0 || col >= M) {
            return true;
        }
        return false;
    }
    
    // 0은 벽이 있는 자리 vs 1은 벽이 없는 자리
    const visited = Array(N).fill(0).map(() => Array(M).fill(0));
    const queue = [];
    
    visited[0][0] = 1;
    queue.push([0, 0]);
    
    while (queue.length !== 0) {
        const [row, col] = queue[0];
        queue.shift();
        
        if (row === N-1 && col === M-1) {
            answer = visited[row][col];
            break;
        }
        
        for (let i=0; i<4; i++) {
            const nextRow = row + dr[i];
            const nextCol = col + dc[i];
            
            if (isOutOfRange(nextRow, nextCol) || visited[nextRow][nextCol] > 0 || maps[nextRow][nextCol] === 0) { continue; }
            
            visited[nextRow][nextCol] = visited[row][col] + 1;
            queue.push([nextRow, nextCol]);
        }
    }
    
    return answer;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));
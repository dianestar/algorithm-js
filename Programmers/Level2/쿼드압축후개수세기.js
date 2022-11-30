const solution = (arr) => {
    const answer = [0, 0];
    
    const compression = (r, c, n) => {
        const value = arr[r][c];
        let flag = true;
        
        for (let i=r; i<r+n; i++) {
            for (let j=c; j<c+n; j++) {
                if (arr[i][j] !== value) {
                    flag = false;    
                    break;
                }
            }
        }
        
        if (flag) answer[value]++;
        else {
            const halfN = n / 2;
            compression(r, c, halfN);
            compression(r, c + halfN, halfN);
            compression(r + halfN, c, halfN);
            compression(r + halfN, c + halfN, halfN);
        }
    }
    
    compression(0, 0, arr.length);
    
    return answer;
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]));
console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]));
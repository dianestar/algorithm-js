/*
const solution = (arr1, arr2) => {
    const r1 = arr1.length; // arr1 행 개수
    const c1 = arr1[0].length; // arr1 열 개수 (== arr2 행 개수)
    const c2 = arr2[0].length; // arr2 열 개수
    
    // 결과 배열의 크기는 r1 * c2
    let answer = new Array(r1);
    for (let i=0; i<r1; i++) {
        answer[i] = new Array(c2);
    }
    
    for (let i=0; i<r1; i++) {
        for (let j=0; j<c2; j++) {
            let value = 0;
            for (let k=0; k<c1; k++) {
                value += arr1[i][k] * arr2[k][j];    
            }
            answer[i][j] = value;
        }
    }
    
    return answer;
}
*/

const solution = (arr1, arr2) => {
    return arr1.map((row) => arr2[0].map((_, cIdx) => row.reduce((acc, cur, rIdx) => acc + cur * arr2[rIdx][cIdx], 0)));
}

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));
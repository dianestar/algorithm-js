let N;
let isLinked;
let answer = 2147483647;

const getLinkedCount = (idx) => {
    // bfs
    const toCheck = [idx];
    const visited = Array(N+1).fill(0);
    visited[idx] = 1;
    let count = 1;
    
    while (toCheck.length !== 0) {
        let start = toCheck[0];
        toCheck.shift();
        
        for (let i=1; i<=N; i++) {
            if (isLinked[start][i] === 1 && !visited[i]) {
                visited[i] = 1;
                toCheck.push(i);
                count++;
            }
        }        
    }
    
    return count;
}

const checkDiff = (first, second) => {
    let diff = Math.abs(getLinkedCount(first) - getLinkedCount(second));
    if (diff < answer) { answer = diff; }
}

const solution = (n, wires) => {
    N = n;
    
    // 2차원 배열 생성
    isLinked = Array(N+1);
    for (let i=0; i<isLinked.length; i++) {
        isLinked[i] = Array(N+1).fill(0);
    }
    
    // 전선 정보 저장
    for (let i=0; i<wires.length; i++) {
        const first = wires[i][0];
        const second = wires[i][1];
        
        isLinked[first][second] = 1;
        isLinked[second][first] = 1;
    }

    // 전선들 하나씩 끊어서 송전탑 개수의 차이 체크 후 백트래킹
    for (let i=0; i<wires.length; i++) {
        const first = wires[i][0];
        const second = wires[i][1];
        
        isLinked[first][second] = 0;
        isLinked[second][first] = 0;
        checkDiff(first, second);
        isLinked[first][second] = 1;
        isLinked[second][first] = 1;
    }
    
    return answer;
}

// console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]));
// console.log(solution(4, [[1,2],[2,3],[3,4]]));
// console.log(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]));
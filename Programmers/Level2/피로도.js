let len;
let maxCount = 0;
const visited = Array(8).fill(0);

const permutation = (count, k, dungeons) => {
    if (count > maxCount) { maxCount = count; }
    
    for (let i=0; i<len; i++) {
        if (visited[i]) { continue; }
        if (k >= dungeons[i][0]) {
            visited[i] = 1;
            permutation(count+1, k - dungeons[i][1], dungeons);
            visited[i] = 0;    
        }
    }
}

const solution = (k, dungeons) => {
    len = dungeons.length;
    permutation(0, k, dungeons);
    return maxCount;
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));
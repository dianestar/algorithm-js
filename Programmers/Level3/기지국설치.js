const solution = (n, stations, w) => {
    const totalW = 2 * w + 1;
    let start = 1;
    let answer = 0;
    
    for (let i=0; i<stations.length; i++) {
        if (start < stations[i] - w) answer += Math.ceil((stations[i] - w - start) / totalW);
        start = stations[i] + w + 1;
    }
    answer += Math.ceil((n + 1 - start) / totalW);

    return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));
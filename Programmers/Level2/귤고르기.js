const solution = (k, tangerine) => {
    const counter = new Map();
    for (let i=0; i<tangerine.length; i++) {
        const key = tangerine[i];
        const value = counter.get(key);
        if (value) counter.set(key, value + 1);
        else counter.set(key, 1);
    }
    
    const counterArr = Array.from(counter);
    counterArr.sort((a, b) => b[1] - a[1]);
    
    let answer = 0;
    for (let i=0; i<counterArr.length; i++) {
        if (k <= 0) break;
        k -= counterArr[i][1];
        answer++;
    }
    
    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
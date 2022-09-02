const solution = (n, works) => {
    if (works.reduce((acc, cur) => acc + cur, 0) <= n) return 0;

    works.sort((a, b) => b - a);
    while (n > 0) {
        let maxWork = works[0];
        for (let i=0; i<works.length; i++) {
            if (works[i] >= maxWork) {
                works[i]--;
                n--;
                if (n === 0) break;
            }
        }
    }
    
    return works.reduce((acc, cur) => acc + cur * cur, 0);
}

console.log(solution(4, [4,3,3]));
console.log(solution(1, [2,1,2]));
console.log(solution(3, [1,1]));
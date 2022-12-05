const solution = (A, B) => {
    let answer = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let j = 0;
    for (let i=0; i<A.length; i++) {
        while (B[j] <= A[i]) j++;
        
        if (j >= B.length) break;
        
        answer++;
        j++;
    }
    
    return answer;
}

console.log(solution([5,1,3,7], [2,2,6,8]));
console.log(solution([2,2,2,2], [1,1,1,1]));
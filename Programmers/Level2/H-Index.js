const solution = (citations) => {
    citations.sort((a, b) => b - a);
    
    const n = citations.length;
    let answer = 0;
    
    for (let i=0; i<n; i++) {
        if (citations[i] >= i+1) { answer = i+1; }
    }
    
    return answer;
}

console.log(solution([3,0,6,1,5]));
const solution = (arr) => {
    const answer = [arr[0]];
    
    for (let i=1; i<arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));
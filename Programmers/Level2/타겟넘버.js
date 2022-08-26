const solution = (numbers, target) => {
    let answer = 0;

    const calculate = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) { answer++; }
            return; 
        }

        calculate(idx+1, sum+numbers[idx]);
        calculate(idx+1, sum-numbers[idx]);
    }
    
    calculate(0, 0);
    
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
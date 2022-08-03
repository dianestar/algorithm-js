const solution = (answers) => {
    const answer = [];
    
    const students = [
        [1,2,3,4,5], // 1번 수포자
        [2,1,2,3,2,4,2,5], // 2번 수포자
        [3,3,1,1,2,2,4,4,5,5], // 3번 수포자
    ];
    const scores = [];
    let maxCount = -1;
    
    for (let i=0; i<3; i++) {
        let count = 0;
        answers.forEach((val, idx) => {
            if (val === students[i][idx % students[i].length]) { count++; }
        });
        scores.push(count);
        if (count > maxCount) { maxCount = count; }
    }
    
    for (let i=0; i<3; i++) {
        if (scores[i] === maxCount) { answer.push(i+1); }
    }
    
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2])); 
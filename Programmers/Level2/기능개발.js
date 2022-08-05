const solution = (progresses, speeds) => {
    const answer = [];
    
    const finish = [];
    for (let i=0; i<progresses.length; i++) {
        finish.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let distribute = finish[0];
    let count = 1;
    for (let i=1; i<finish.length; i++) {
        if (finish[i] <= distribute) { count++; }
        else {
            answer.push(count);
            distribute = finish[i];
            count = 1;
        }
    }
    answer.push(count);
    
    return answer;
}

console.log(solution([93, 30, 55], 	[1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
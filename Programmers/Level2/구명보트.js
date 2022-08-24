const solution = (people, limit) => {
    let answer = 0;
    
    people.sort((a, b) => b - a);
    
    let lPivot = 0;
    let rPivot = people.length - 1;
    while (lPivot <= rPivot) {
        if (people[lPivot] + people[rPivot] <= limit) { rPivot--; }
        lPivot++;
        answer++;
    }
    
    return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
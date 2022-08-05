const solution = (priorities, location) => {
    let answer = 0;
    
    const queue = [];
    priorities.forEach((value, index) => {
        queue.push([index, value]);
    });
    priorities.sort((a, b) => b - a); // 중요도가 높은 순으로 내림차순 정렬
    
    while (1) {
        // 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
        const index = queue[0][0];
        const value = queue[0][1];
        
        // 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
        if (value !== priorities[0]) {
            queue.push([index, value]);
            queue.shift();
        }
        
        // 3. 그렇지 않으면 J를 인쇄합니다.
        else {
            answer++;
            queue.shift();
            priorities.shift();
            
            // 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return
            if (index === location) { break; }
        }
    }
    
    return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
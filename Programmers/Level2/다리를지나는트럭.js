const solution = (bridge_length, weight, truck_weights) => {
    let answer = 0;
    
    const curBridge = [];
    let curWeight = 0;
    
    // 대기 트럭에 있는 트럭이 모두 다리에 올라갈 때까지
    while (truck_weights.length > 0) {
        if (curBridge.length === bridge_length) {
            curWeight -= curBridge[0];
            curBridge.shift();  
        }
        if (curBridge.length < bridge_length) {
            if (curWeight + truck_weights[0] <= weight) {
                curWeight += truck_weights[0];
                curBridge.push(truck_weights[0]);
                truck_weights.shift();
            } else {
                curBridge.push(0);
            }
        }
        answer++;
    }
    
    // 다리를 건너는 중인 트럭이 모두 다리를 지날 때까지
    while (curWeight > 0) {
        if (curBridge.length === bridge_length) {
            curWeight -= curBridge[0];
            curBridge.shift();
        }
        if (curBridge.length < bridge_length) {
            curBridge.push(0);
        }
        answer++;        
    }
    
    return answer;
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));
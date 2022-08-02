const solution = (participant, completion) => {  
    let answer = "";
    
    const map = new Map();
    participant.forEach((x) => {
        if (map.get(x)) { map.set(x, map.get(x)+1); }
        else { map.set(x, 1); }
    });
    completion.forEach((x) => {
        map.set(x, map.get(x)-1);
    })
    for (const [key, value] of map) {
        if (value !== 0) {
            answer = key;
            break;
        }    
    }
    
    return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
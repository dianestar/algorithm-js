const solution = (n, s) => {
    let answer = [];
    
    // 원소의 편차가 가장 작을 때 최고의 집합 조건을 만족할 수 있음
    const share = Math.floor(s / n);
    
    // 최고의 집합이 존재하지 않는 경우, 크기가 1인 1차원 배열에 -1 을 채워서 return
    if (share === 0) return [-1];
    
    const remainder = s % n;
    
    // 최고의 집합이 존재하는 경우, 오름차순으로 정렬된 1차원 배열로 return
    // n개의 원소를 모두 share 값으로 나열한 후 뒤에서부터 remainder개의 원소에는 각각 +1
    for (let i=0; i<n-remainder; i++) answer.push(share);    
    for (let i=0; i<remainder; i++) answer.push(share + 1);    
    return answer;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
const solution = (want, number, discount) => {
    let answer = 0;
    
    // {원하는제품: 수량}을 저장하는 Map 생성
    const map = new Map();
    for (let i=0; i<want.length; i++) {
        map.set(want[i], number[i]);
    }

    // 원하는 제품의 총 수량
    let totalCount = number.reduce((acc, cur) => acc + cur, 0);
    // 구매할 수 있는 수량
    let curCount = 0;
    
    /* 슬라이딩 윈도우 활용 */
    // #1. 첫째 날부터 열흘 간 구매할 수 있는 수량 for문으로 직접 파악
    for (let i=0; i<10; i++) {
        if (map.has(discount[i])) {
            map.set(discount[i], map.get(discount[i])-1);
            if (map.get(discount[i]) >= 0) curCount++;
        }
    }
    if (curCount === totalCount) answer++;
    
    // #2. 둘째 날 이후에 해당하는 값은 #1에서 구한 값을 기반으로 pivot을 하나씩 옮겨가며 구하기
    let pivot = 1;
    while (1) {
        if (pivot+9 >= discount.length) break;
        
        let toAdd = discount[pivot+9];
        if (map.has(toAdd)) {
            map.set(toAdd, map.get(toAdd)-1);
            if (map.get(toAdd) >= 0) curCount++;
        }
        
        let toRemove = discount[pivot-1];
        if (map.has(toRemove)) {
            map.set(toRemove, map.get(toRemove)+1);
            if (map.get(toRemove) > 0) curCount--;
        }
        
        if (curCount === totalCount) answer++;
        pivot++;
    }
    /*********************/
    
    return answer;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]));
console.log(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]));
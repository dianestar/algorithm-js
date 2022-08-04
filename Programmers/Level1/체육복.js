const solution = (n, lost, reserve) => {
    let answer = 0;
    
    // 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우 체육복을 빌려줄 수 없으나 체육 수업을 들을 수는 있음
    for (let i=0; i<reserve.length; i++) {
        const isLost = lost.indexOf(reserve[i]);
        if (isLost > -1) {
            lost.splice(isLost, 1);
            reserve.splice(i, 1);
            i--;
        }
    }
    answer += n - lost.length;
    
    // 빌려주기 총 2회 시행
    // 1회차: 앞뒤 번호 중 한 명에게만 빌릴 수 있는 학생들에게 우선적으로 빌려줌
    // 2회차: 보류된 학생들에게 앞뒤 번호 중 빌려줄 체육복이 남아 있다면 빌려줌
    for (let i=0; i<2; i++) {
        for (let j=0; j<lost.length; j++) {
            const prev = reserve.indexOf(lost[j]-1); // 앞번호 여분 여부
            const next = reserve.indexOf(lost[j]+1); // 뒷번호 여분 여부
            
            // 앞뒤 번호 모두에게 빌릴 수 없는 학생들은 아예 배열에서 제외
            if (prev === -1 && next === -1) {
                lost.splice(j, 1);
                j--;
                continue;
            }
            
            // 1회차에 앞뒤 번호 모두에게 빌릴 수 있는 학생들은 보류
            if (i == 0 && prev > -1 && next > -1) {
                continue;
            }
            
            if (prev > -1) { reserve.splice(prev, 1); }
            else if (next > -1) { reserve.splice(next, 1); }
            lost.splice(j, 1);
            j--;
            answer++;
        }
    }
     
    return answer;
}

console.log(solution(5, [2,4], [1,3,5]));
console.log(solution(5, [2,4], [3]));
console.log(solution(3, [3], [1]));
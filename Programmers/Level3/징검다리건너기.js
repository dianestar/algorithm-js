// 징검다리는 일렬로 놓여 있고 각 징검다리의 디딤돌에는 모두 숫자가 적혀 있으며 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듭니다.
// 디딤돌의 숫자가 0이 되면 더 이상 밟을 수 없으며 이때는 그 다음 디딤돌로 한번에 여러 칸을 건너 뛸 수 있습니다.
// 단, 다음으로 밟을 수 있는 디딤돌이 여러 개인 경우 무조건 가장 가까운 디딤돌로만 건너뛸 수 있습니다.

const solution = (stones, k) => {
    let answer = 0;
    let min = 0;
    let max = 200000000;
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let skip = 0;
        let flag = true;
        
        for (let i=0; i<stones.length; i++) {
            if (stones[i] - mid >= 0) skip = 0;
            else skip++;
            
            if (skip >= k) {
                flag = false;
                break;
            }
        }
        
        if (flag) {
            answer = mid;
            min = mid + 1;
        }
        else max = mid - 1;
    }
    
    // 최대 몇 명까지 징검다리를 건널 수 있는지 return
    return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
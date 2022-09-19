/* 일부 테케 시간 초과 😥
const getSum = (queue) => {
    return queue.reduce((acc, cur) => { return acc + cur; }, 0);
}

const solution = (queue1, queue2) => {
    let answer = 0;
    
    while (1) {
        if (queue1.length === 0 || queue2.length === 0) {
            answer = -1;
            break;
        }
        
        const sum1 = getSum(queue1);
        const sum2 = getSum(queue2);
        
        if (sum1 === sum2) { break; }
    
        if (sum1 > sum2) {
            queue2.push(queue1[0]);
            queue1.shift();
        }
        else {
            queue1.push(queue2[0]);
            queue2.shift();
        }
        answer++;
    }
    
    return answer;
}
*/

/* 테케 11번, 28번 통과 ❌
const getSum = (queue) => {
    return queue.reduce((acc, cur) => { return acc + cur; }, 0);
}

const solution = (queue1, queue2) => {
    let answer = 0;
    
    let sum1 = getSum(queue1);
    let sum2 = getSum(queue2);
    
    if ((sum1 + sum2) % 2) return -1;
    
    let pivot1 = 0;
    let pivot2 = 0;
    let target;
    
    while (1) {
        if (pivot1 >= queue1.length || pivot2 >= queue2.length) return -1;
        
        if (sum1 === sum2) return answer;
    
        if (sum1 > sum2) {
            target = queue1[pivot1];
            queue2.push(target);
            sum2 += target;
            sum1 -= target;
            pivot1++;
        }
        else {
            target = queue2[pivot2];
            queue1.push(target);
            sum1 += target;
            sum2 -= target;
            pivot2++;
        }
        answer++;
    }
}
*/

/* 최종 코드 */
const getSum = (queue) => {
    return queue.reduce((acc, cur) => { return acc + cur; }, 0);
}

const solution = (queue1, queue2) => {
    let answer = 0;
    
    const maxAns = (queue1.length + queue2.length) * 2;
    let sum1 = getSum(queue1);
    let sum2 = getSum(queue2);
    let pivot1 = 0;
    let pivot2 = 0;
    let target;
    
    while (1) {
        if (answer > maxAns) return -1;
        if (sum1 === sum2) return answer;
    
        if (sum1 > sum2) {
            target = queue1[pivot1];
            queue2.push(target);
            sum2 += target;
            sum1 -= target;
            pivot1++;
        }
        else {
            target = queue2[pivot2];
            queue1.push(target);
            sum1 += target;
            sum2 -= target;
            pivot2++;
        }
        answer++;
    }
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
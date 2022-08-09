/* 최종 코드 */
const solution = (s) => {
    let stack = 0;
    
    for (const char of s) {
        if (char === '(') { stack++; }
        else { // char === ')'
            if (stack > 0) { stack--; }
            else { return false; }
        }
    }

    if (stack > 0) { return false; }

    return true;
}

/* 1차로 작성한 코드 (효율성 테케 시간 초과)
const solution = (s) => {
    let answer = true;
    const stack = [];

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        }
        else {
            if (stack.length !== 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            }
            else {
                answer = false;
                break;
            }
        }
    }

    if (stack.length !== 0) {
        answer = false;
    }

    return answer;
}
*/

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
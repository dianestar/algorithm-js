const solution = (name) => {
    let answer = 0;
    let move = 2147483647;
    const len = name.length;

    for (let i=0; i<len; i++) {
        // A:65 ~ Z:90
        const charCode = name.charCodeAt(i);
        answer += Math.min(91 - charCode, charCode - 65);
        
        let idx = i + 1;
        while (idx < len && name.charAt(idx) === 'A') { idx++; }
        
        const left = i;
        const right = len - idx;
        move = Math.min(move, left + right + Math.min(left, right));
    }
    answer += move;
    
    return answer;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
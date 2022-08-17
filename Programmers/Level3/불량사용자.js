const permutation = (arr, count) => {
    const results = [];
    
    if (count === 1) { return arr.map((value) => [value]); }
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permutated = permutation(rest, count-1);
        const concatenated = permutated.map((value) => [fixed, ...value]);
        results.push(...concatenated);
    });
    
    return results;
}

const isSame = (user, banned) => {
    if (user.length !== banned.length) { return false; }
    for (let i=0; i<banned.length; i++) {
        if (banned[i] === '*') { continue; }
        if (banned[i] !== user[i]) { return false; }
    }
    return true;
}

const solution = (user_id, banned_id) => {
    const N = banned_id.length;
    const cases = permutation(user_id, N);
    const uniqueCases = new Set();
    
    for (let i=0; i<cases.length; i++) {
        let flag = true;
        for (let j=0; j<N; j++) {
            if (!isSame(cases[i][j], banned_id[j])) {
                flag = false;
                break;
            }
        }
        if (flag) {
            cases[i].sort();
            uniqueCases.add(cases[i].join(''));
        }
    }
    
    return uniqueCases.size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]));
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]));
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]));
const permutation = (count, arr) => {
    const results = [];
    
    if (count === 1) { return arr.map((value) => value); }
    
    arr.forEach((fixed, index, origin) => {
        const permutated = permutation(count - 1, origin);
        const concatenated = permutated.map((value) => [fixed, ...value].join(''));
        results.push(...concatenated);
    });
    
    return results;
}

const solution = (word) => {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const dict = [];
    
    for (let i=1; i<=5; i++) {
        const results = permutation(i, alphabets);
        dict.push(...results);
    }
    
    dict.sort();
    
    for (let i=0; i<dict.length; i++) {
        if (dict[i] === word) {
            return i+1;
        }
    }
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
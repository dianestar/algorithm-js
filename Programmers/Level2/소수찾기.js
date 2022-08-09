let N = 0;
const visited = Array(10).fill(0);
const permutated = [];
const set = new Set();

const isPrime = (number) => {
    if (number <= 1) { return false; }

    const sqrt = parseInt(Math.sqrt(number));
    for (let i=2; i<=sqrt; i++) {
        if (number % i === 0) { return false; }
    }
    
    return true;
}

const permutation = (idx, count, arr) => {
    if (idx === count) {
        const number = Number(permutated.join(''));
        if (isPrime(number)) { set.add(number); }
    }
    for (let i=0; i<N; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            permutated.push(arr[i]);
            permutation(idx+1, count, arr);
            visited[i] = 0;
            permutated.pop();
        }
    }
}

const solution = (numbers) => {
    N = numbers.length;
    const arr = numbers.split('');
    
    for (let i=1; i<=N; i++) {
        permutation(0, i, arr);
    }
    
    return set.size;
}

console.log(solution("17"));
set.clear();
console.log(solution("011"));
function solution(numbers) {
    numbers.sort((a, b) => {
        const strA = String(a);
        const strB = String(b);
        return Number(strB + strA) - Number(strA + strB);
    });
    const joined = numbers.join('');
    return joined[0] === '0' ? '0' : numbers.join('');
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
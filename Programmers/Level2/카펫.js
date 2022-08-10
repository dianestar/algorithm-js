const solution = (brown, yellow) => {
    const divisors = [];
    for (let i=1; i<=yellow; i++) {
        if (yellow % i === 0) { divisors.push(i); }
    }
 
    let yellowX, yellowY;
    const lastIdx = divisors.length - 1;
    for (let i=0; i<=parseInt(lastIdx / 2); i++) {
        yellowX = divisors[lastIdx - i];
        yellowY = divisors[i];
        if ((yellowX + yellowY) * 2 + 4 === brown) { break; }
    }
    
    return [yellowX+2, yellowY+2];
}
console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
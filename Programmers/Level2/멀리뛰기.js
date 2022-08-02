const solution = (n) => {
    const dp = [0, 1, 2];
    
    for (let i=3; i<=n; i++) {
        // i번 칸에 도달하는 방법 a) i-2번 칸에서 2칸 뛰기 or b) i-1번 칸에서 1칸 뛰기
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
    }
    
    return dp[n];
}

console.log(solution(4));
console.log(solution(3));
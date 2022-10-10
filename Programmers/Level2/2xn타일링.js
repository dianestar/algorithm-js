const solution = (n) => {
    const dp = Array(n+1);
    
    dp[1] = 1;
    dp[2] = 2;
    for (let i=3; i<=n; i++) {
        // dp[i]: dp[i-1]의 경우에 세로로 배치하는 타일을 한개 추가하는 경우 + dp[i-2]의 경우에 가로로 배치하는 타일을 두개 추가하는 경우
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
    }
    
    return dp[n];
}

console.log(solution(4));
const solution = (n, s, a, b, fares) => {
    const MAX_FARE = 2147483647;
    
    // Dprev[i][j]: i지점과 j지점 사이의 예상 택시요금
    // i === j일 경우 0
    // i지점에서 j지점으로 가는 경로가 존재하지 않을 경우 MAX_FARE
    let Dprev = Array(n+1);
    for (let i=0; i<=n; i++) { Dprev[i] = Array(n+1).fill(MAX_FARE); }
    for (let i=1; i<=n; i++) { Dprev[i][i] = 0; }
    for (let i=0; i<fares.length; i++) {
        const firstNode = fares[i][0];
        const secondNode = fares[i][1];
        const fare = fares[i][2];
        Dprev[firstNode][secondNode] = fare;
        Dprev[secondNode][firstNode] = fare;
    }
    
    // 플로이드 와샬 알고리즘 활용
    // 모든 정점에서 모든 정점까지의 최소 거리 구하기
    // Dnext = min(Dprev(ij), Dprev(ik) + Dprev(kj))
    let Dnext = Dprev.map((v) => v.slice());
    for (let k=1; k<=n; k++) {
        for (let i=1; i<=n; i++) {
            if (i === k || Dprev[i][k] === MAX_FARE) { continue; }
            for (let j=1; j<=n; j++) {
                Dnext[i][j] = Math.min(Dprev[i][j], Dprev[i][k] + Dprev[k][j]);    
            }
        }
        Dprev = Dnext.map((v) => v.slice());
    }
    
    // 모든 정점을 합승 도착 지점으로 가정해보며 비교하기    
    let minFare = MAX_FARE;
    for (let i=1; i<=n; i++) { // i: 합승 도착 지점
        const curFare = Dnext[s][i] + Dnext[i][a] + Dnext[i][b];
        if (curFare < minFare) { minFare = curFare; }
    }
    
    return minFare;
}

console.log(solution(6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]));
console.log(solution(7, 3, 4, 1, [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]));
console.log(solution(6, 4, 5, 6, 	[[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]));
const solution = (sizes) => {
    let width = 1;
    let height = 1;
    
    sizes.forEach(([w, h]) => {
        // 무조건 명함의 가로와 세로 중 더 긴 쪽을 가로로 눕혀 수납한다고 가정
        const longer = Math.max(w, h);
        const shorter = Math.min(w, h);
        if (longer > width) { width = longer; }
        if (shorter > height) { height = shorter; }
    });
    
    return width * height;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));
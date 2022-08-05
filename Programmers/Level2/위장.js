const solution = (clothes) => {
    let answer = 1;
    
    const clothesMap = new Map(); // {의상의 종류, 개수}
    clothes.forEach(([name, type]) => {
        if (clothesMap.has(type)) { clothesMap.set(type, clothesMap.get(type) + 1); }
        else { clothesMap.set(type, 1); }
    });
    
    clothesMap.forEach((value) => {
        // 해당 종류를 입지 않는 경우의 수 하나 더하여 곱하기
        answer *= (value + 1); 
    });
    
    // 하루에 최소 한 개의 의상은 입으므로 어떤 종류도 입지 않는 경우의 수 하나 빼기
    return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
    
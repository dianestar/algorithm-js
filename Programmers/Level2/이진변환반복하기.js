const solution = (s) => {
    let converted = 0; // 이진 변환의 횟수
    let deleted = 0; // 제거된 모든 0의 개수
    
    while (s !== '1') {
        converted++;
        
        // 1. x의 모든 0을 제거합니다.
        while (s.indexOf('0') !== -1) {
            deleted++;
            s = s.replace('0', '');
        }

        // 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
        s =  s.length.toString(2);
    }
    
    return [converted, deleted];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
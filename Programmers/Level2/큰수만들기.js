const solution = (number, k) => {
    let answer = '';
    
    const arr = number.split("").map((v) => parseInt(v));
    const stack = [];
    for (let i=0; i<arr.length; i++) {
        while (k > 0 && stack.length !== 0 && stack[stack.length - 1] < arr[i]) {
            stack.pop();
            k--;
        }
        stack.push(arr[i]);
    }
    
    return stack.slice(0, number.length - k).join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
const solution = (array, commands) => {
    const answer = [];
    
    for (const [i, j, k] of commands) {
        const newArr = array.slice(i-1, j);
        newArr.sort((a, b) => a - b);
        answer.push(newArr[k-1]);
    }
    
    return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));
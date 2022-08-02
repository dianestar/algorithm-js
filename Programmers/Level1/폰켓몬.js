const solution = (nums) => {
    const unique = new Set(nums);
    return Math.min(unique.size, nums.length / 2);
}

console.log(solution([3,1,2,3]));
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));
function maxDifferenceNumber(nums) {
    if(1 > nums.length || nums.length > 105) {
        return "Invalid array range 1 - 105.";
    } else if(nums.length === 1) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    let maxDifference = 0;
    let differenceNumber = 0;

    for (let i = 1; i < nums.length; i++) {
        if(0 > nums[i] || nums[i] > 109 || 0 > nums[0] || nums[0] > 109) {
            return "Invalid number value in array range of 0 - 109.";
        }
        maxDifference = Math.max(maxDifference, nums[i] - nums[i - 1]);
    }

    return maxDifference;

}

function inputArrayNumber() {
    const prompt = require('prompt-sync')();
    let arrayTreasure = prompt("Input:");
    return JSON.parse(arrayTreasure);
}

// Data For Test
// console.log(maxDifferenceNumber([3, 6, 9, 1]));
// console.log(maxDifferenceNumber([1, 6, 9, 1]));
// console.log(maxDifferenceNumber([10]));

console.log(maxDifferenceNumber(inputArrayNumber()));
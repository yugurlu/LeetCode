/**
 * @param {number[]} nums
 * @return {string}
 */
function compareNumbers(a, b) {
    if (a + b > b + a) return -1;
    else return 1;
}

var largestNumber = function (nums) {
    nums = nums.map(String);
    nums.sort((a, b) => compareNumbers(a, b));
    nums = nums.join('')

    return nums[0] == 0 ? '0' : nums
};
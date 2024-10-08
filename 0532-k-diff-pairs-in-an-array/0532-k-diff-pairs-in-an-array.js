/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                if (!seen.has([nums[i], nums[j]].toString()) && !seen.has([nums[j], nums[i]].toString())) {
                    seen.add([nums[i], nums[j]].toString())
                }
            }
        }
    }

    return seen.size
};
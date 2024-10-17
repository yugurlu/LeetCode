/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max = 0
    let sum = 0
    let first = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    max = sum / k

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[first]

        if (max < sum / k) {
            max = sum / k
        }

        first++
    }

    return max
};
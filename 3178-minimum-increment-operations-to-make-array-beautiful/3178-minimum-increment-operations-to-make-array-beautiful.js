/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minIncrementOperations = function (nums, k) {
    let ops = 0;

    for (let i = 1; i < nums.length; i++) {
        let pair = nums.slice(i - 1, i - 1 + 3);
        if (pair.length < 3) continue;

        max = Math.max(...pair)

        if (max < k) {
            let diffMaxAndK = k - max;
            nums[i - 1] += diffMaxAndK;
            nums[i] += diffMaxAndK;
            nums[i + 1] += diffMaxAndK;
            ops += diffMaxAndK;
        }
    }

    return ops
};
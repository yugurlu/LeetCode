/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let hashSet = new Set([])

    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            return nums[i]
        }
        else hashSet.add(nums[i])
    }
};
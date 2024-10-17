/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    let nums = num.toString().split("");
    let indexs = [];

    for (let i = 0; i < nums.length; i++) {
        if (indexs.findIndex((v) => v.num == nums[i]) === -1) {
            indexs.push({ num: nums[i], index: nums.lastIndexOf(nums[i]) });
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let find = indexs.find((v) => Math.max(
            ...indexs.map(v => v.num)) > nums[i] &&
            v.index > i &&
            Math.max(...indexs.map(v => v.num)) == v.num
        );

        if (find) {
            let temp = nums[i];
            nums[i] = find.num
            nums[find.index] = temp;
            return parseInt(nums.join(""));
        }

        let remove = indexs.findIndex(v => v.index === i)
        if (remove != -1) indexs.splice(remove, 1)
    }

    return parseInt(nums.join(""));
};
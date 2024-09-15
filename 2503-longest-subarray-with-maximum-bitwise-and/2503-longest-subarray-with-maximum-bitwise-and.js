/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let len = 1,
    maxLen = 0,
    firstProc = 1;
  let max = Math.max(...nums);
  let find = nums.indexOf(max);

  if (find != 0) nums = nums.slice(find);

  while (true) {
    if (find == -1) break;

    if (firstProc || nums[maxLen] == max) {
      for (let i = 0; nums[i + 1] == max; i++) {
        len++;
      }

      if (maxLen < len) maxLen = len;
      nums = nums.slice(len);
      firstProc = 0;
    }
    else
        break;

    find = nums.indexOf(max);
    nums = nums.slice(find);
    len = 1;
  }

  return maxLen;
}
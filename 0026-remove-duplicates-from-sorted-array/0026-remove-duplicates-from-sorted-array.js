
function removeDuplicates(nums) {
    var count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums.slice(i + 1).indexOf(nums[i]) == -1) nums[count++] = nums[i]
    }
    delete nums.splice(count)
    return count;
};
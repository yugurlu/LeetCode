
function searchInsert(nums, target) {
    var fark = Number.MAX_SAFE_INTEGER
    var result = 0

    for(let i = 0; i < nums.length; i++)
        if(nums[i] == target)
        return i
    for(var j = 0; j < nums.length; j++)
    {
        if(fark > Math.abs(nums[j] - target))
        {
            if(nums[j] < target)
                result = j + 1;
            else
                result = j;
            fark = Math.abs(nums[j] - target);
        }
    }
    return result
};

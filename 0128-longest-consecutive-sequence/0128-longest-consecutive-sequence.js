
function longestConsecutive(nums) {
    var len = 1;
    var breakk = 0;
    var result = 0;
    var old_len = len;
    nums = nums.sort(function(a, b){return a-b})
    while (breakk != nums.length){
        for(var i = breakk; i < nums.length; i++){
            if(nums[i] == (nums[i + 1] - 1)) len++
            else if(nums[i] == nums[i + 1]) continue
            else break
        }
        breakk = i + 1
        if(len >= old_len){
            result = len
            old_len = len
        }
    len = 1
    }
    return result
};

function singleNumber(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i != j && nums[i] == nums[j]) break
            if(j == nums.length - 1) return nums[i]
        }
    }
};

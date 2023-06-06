
function canMakeArithmeticProgression(arr) {
    arr = arr.sort(function(a,b){return a - b})
    for(var i = 1; i < arr.length; i++){
        if(arr[i] - arr[i - 1] != arr[1] - arr[0]) return false
    }
    return true
};
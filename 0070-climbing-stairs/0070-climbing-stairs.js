/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let pre = 3
    let curr = 5
    let result = 0

    if (n < 4) return n
    if (n === 4) return 5

    for (let i = 0; i < n - 4; i++) {
        let temp = pre
        result = curr + pre
        pre = curr
        curr += temp
    }

    return result
};
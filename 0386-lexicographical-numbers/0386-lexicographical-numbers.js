/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    arr = arr.map(String).sort()
    return arr.map(Number)
};
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    var xors = [];
    
    queries.forEach((query) => {
        var xor = 0;
        var slice = arr.slice(query[0], query[1] + 1);

        slice.forEach(num => {
            xor = num ^ xor;
        })
        xors.push(xor);
    })
    
    return xors;
};
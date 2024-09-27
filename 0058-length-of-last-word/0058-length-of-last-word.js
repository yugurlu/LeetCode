/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.split(' ').filter(s => s.length != 0)
    return s[s.length - 1].length
};
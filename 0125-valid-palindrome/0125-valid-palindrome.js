/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    return newStr === newStr.split("").reverse().join("")
};
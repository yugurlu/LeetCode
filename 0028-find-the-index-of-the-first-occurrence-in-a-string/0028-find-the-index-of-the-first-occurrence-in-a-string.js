/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const index = haystack.indexOf(needle)
    if (index != -1) return index
    return -1
};
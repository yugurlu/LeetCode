/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let steps = 0
    let whitePos = 0

    for (let currPos = 0; currPos < s.length; currPos++) {
        if (s[currPos] === '0') {
            steps += currPos - whitePos
            whitePos++
        }
    }

    return steps
};
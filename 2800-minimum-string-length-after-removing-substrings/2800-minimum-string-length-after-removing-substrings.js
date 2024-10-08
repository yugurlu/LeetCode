/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        if ((s[i] == "A" && s[i + 1] == "B") || (s[i] == "C" && s[i + 1] == "D")) {
            while ((s[i] == "A" && s[i + 1] == "B") || (s[i] == "C" && s[i + 1] == "D")) {
                s.splice(i, 1);
            }
            s.splice(i, 1)
            i = -1
        }

    }

    return s.length
};
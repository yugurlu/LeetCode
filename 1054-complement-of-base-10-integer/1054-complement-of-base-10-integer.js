/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let newBinary = ""
    n = n.toString(2)

    for (let i = 0; i < n.length; i++) {
        if (n[i] == 1)
            newBinary += "0"
        else
            newBinary += "1"
    }

    return parseInt(newBinary, 2)
};
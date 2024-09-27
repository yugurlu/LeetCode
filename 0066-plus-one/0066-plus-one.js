/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let lastNumber = digits[digits.length - 1]
    if (lastNumber === 9) {
        if (digits.length === 1) {
            digits[0] = 1;
            digits.push(0);
        }
        else {
            digits[digits.length - 1] = 0;
            for (let i = digits.length - 2; i != -1; i--) {
                if (digits[i] + 1 === 10) {
                    digits[i] = 0;
                    if (i - 1 == -1) 
                        digits.splice(0, 0, 1)
                }
                else {
                    digits[i] += 1
                    break;
                }
            }
        }
    }
    else
        digits[digits.length - 1] += 1

    return digits
};

// 6145390195186705543
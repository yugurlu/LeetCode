/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let num = "";
    let stack = [];
    let prevOp = "+";

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch >= "0" && ch <= "9") {
            num += ch;
        }

        if (ch == "+" || ch == "-" || ch == "/" || ch == "*" || i == s.length - 1) {
            if (prevOp == "+") stack.push(parseInt(num));
            else if (prevOp == "-") stack.push(parseInt(num) * -1);
            else if (prevOp == "*") stack.push(stack.pop() * parseInt(num));
            else if (prevOp == "/") stack.push(Math.trunc(stack.pop() / parseInt(num)));

            prevOp = ch;
            num = ""
        }
    }

    stack = stack.reduce((a, b) => a + b)
    return stack
};
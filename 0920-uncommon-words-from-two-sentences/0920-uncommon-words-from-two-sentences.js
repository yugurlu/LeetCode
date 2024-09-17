/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    s1 = s1.split(" ");
    s2 = s2.split(" ");

    let filter;
    let arr = [];
    let length = Math.max(s1.length, s2.length);

    for (let i = 0; i < length; i++) {

        if (s1[i] && s2.indexOf(s1[i]) == -1) {

            filter = s1.filter((item) => {
                return item !== s1[i];
            });

            if (s1.length - filter.length == 1) arr.push(s1[i]);
        }

        if (s2[i] && s1.indexOf(s2[i]) == -1) {

            filter = s2.filter((item) => {
                return item !== s2[i];
            });

            if (s2.length - filter.length == 1) arr.push(s2[i]);
        }
    }

    return arr;
};
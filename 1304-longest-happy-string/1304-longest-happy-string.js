/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let lds = "";
    let queue = new PriorityQueue({ compare: (x, y) => y.count - x.count });

    if (a) queue.enqueue({ char: "a", count: a });
    if (b) queue.enqueue({ char: "b", count: b });
    if (c) queue.enqueue({ char: "c", count: c });

    while (queue.size()) {
        let p = queue.dequeue();

        if (
            lds.length >= 2 &&
            lds[lds.length - 1] == p.char &&
            lds[lds.length - 2] == p.char
        ) {
            if (queue.isEmpty()) break;

            let temp = queue.dequeue();
            lds += temp.char;

            if (temp.count - 1 > 0) {
                queue.enqueue({ char: temp.char, count: temp.count - 1 });
            }
        }
        else {
            p.count--;
            lds += p.char;
        }

        if (p.count > 0) {
            queue.enqueue(p);
        }
    }

    return lds;
};
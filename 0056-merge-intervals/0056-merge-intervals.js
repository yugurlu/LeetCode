/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1) return intervals

    let newIntervals = []
    intervals = intervals.sort((a, b) => a[0] - b[0])

    let current = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = current;
        const [nextStart, nextEnd] = intervals[i];

        if (currentEnd >= nextStart) {
            current = [currentStart, Math.max(currentEnd, nextEnd)]
        }
        else {
            newIntervals.push(current)
            current = intervals[i]
        }
    }

    newIntervals.push(current)

    return newIntervals
};
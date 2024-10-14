/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    let maxScore = 0
    let pq = new MaxPriorityQueue();

    for (let i of nums) {
        pq.enqueue(i);
    }

    while (k--) {
        let maxElement = pq.dequeue().element;
        maxScore += maxElement
        pq.enqueue(Math.ceil(maxElement / 3.0))
    }

    return maxScore
};

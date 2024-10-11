/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
    let chairs = Array(times.length).fill(-1)
    let sortedTimes = [...times].sort((a, b) => a[0] - b[0])

    for (let i = 0; i < sortedTimes.length; i++) {

        for (let j = 0; j < chairs.length; j++) {
            if (chairs[j] <= sortedTimes[i][0]) {
                chairs[j] = sortedTimes[i][1]
                
                let friend = times.findIndex(n => n == sortedTimes[i])
                if (friend === targetFriend) {
                    return j
                }
                break;
            }
        }
    }
};
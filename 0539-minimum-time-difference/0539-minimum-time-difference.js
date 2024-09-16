/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    var smallDiff = Number.MAX_SAFE_INTEGER;

    timePoints = timePoints.map((time) => {
        var [hours, minutes] = time.split(":");
        return parseInt(hours) * 60 + parseInt(minutes);
    });

    timePoints.sort((a, b) => a - b);

    for (var i = 0; i < timePoints.length - 1; i++) {
        smallDiff = Math.min(smallDiff, Math.abs(timePoints[i] - timePoints[i + 1]));
    }
    return Math.min(smallDiff, 24 * 60 - timePoints[timePoints.length - 1] + timePoints[0]);;
};
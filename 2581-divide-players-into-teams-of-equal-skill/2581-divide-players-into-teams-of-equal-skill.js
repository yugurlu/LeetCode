/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    let chemistry = 0
    let len = skill.length
    let total = skill.reduce((a, b) => a + b)
    let target = total / (skill.length / 2)

    skill = skill.sort((a, b) => a - b)

    for (let i = 0; i < len / 2; i++) {
        if (parseInt(skill[i]) + parseInt(skill[len - (i + 1)]) != target) return -1
        chemistry += skill[i] * skill[len - (i + 1)]
    }

    return chemistry
};
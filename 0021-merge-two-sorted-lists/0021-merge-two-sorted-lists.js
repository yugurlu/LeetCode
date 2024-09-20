/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let arr = [];
    let res = new ListNode();
    let temp = res;

    while (list1 != undefined || list2 != undefined) {
        if (list1 != undefined) {
            arr.push(list1.val);
            list1 = list1.next;
        }
        if (list2 != undefined) {
            arr.push(list2.val);
            list2 = list2.next;
        }
    }

    if (arr.length) arr.sort((a, b) => a - b);
    else return null

    arr.forEach((e, i) => {
        res.val = e;
        if (arr[i + 1] != undefined) {
            res.next = new ListNode();
            res = res.next;
        }
    });

    return temp;
};

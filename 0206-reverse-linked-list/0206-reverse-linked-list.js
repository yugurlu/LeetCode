/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let curr = head
    let newList = new ListNode(curr?.val)

    if (!head || (!head.val && head.next === null)) return null

    while (curr.next !== null) {
        curr = curr.next
        let pre = newList;

        newList = new ListNode(curr.val)
        newList.next = pre
    }

    return newList
};
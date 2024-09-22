/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    var newList = new ListNode();
    var res = newList;
    var first = true;

    nums = new Set(nums) // to O(1) time complexity

    while (head != null) {
        if (!nums.has(head.val)) {
            if (!first) {
                newList.next = new ListNode();
                newList = newList.next;
            }
            newList.val = head.val;
            first = false;
        }
        head = head.next;
    }

    return res;
};
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
var deleteDuplicates = function (head) {
    let it = head;
    let values = new Set([]);
    let newList = head?.val !== undefined ? new ListNode(head.val) : null;

    while (it) {
        values.add(it.val);
        it = it.next;
    }

    it = newList;
    values.forEach((v) => {
        it.val = v;
        values.delete(v)
        if (values.size) {
            it.next = new ListNode();
            it = it.next;
        }

    });

    return newList;
};
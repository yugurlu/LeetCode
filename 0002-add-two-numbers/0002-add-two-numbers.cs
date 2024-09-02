/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        int rem = 0;
        ListNode listNode = new(0), p = l1, p2 = l2, response = listNode;

        while (p != null || p2 != null)
        {
            int x = (p != null) ? p.val : 0;
            int y = (p2 != null) ? p2.val : 0;
            int total = rem + x + y;
            
            if (9 < total)
            {
                listNode.val = total % 10;
                rem = total / 10;
                if (p?.next != null || p2?.next != null || rem > 0)
                    listNode.next = new ListNode(rem);
            }
            else
            {
                listNode.val = total;
                rem = total / 10;
                if (p?.next != null || p2?.next != null || rem > 0)
                    listNode.next = new ListNode();
            } 
            p = p?.next;
            p2 = p2?.next;
            
            listNode = listNode.next;
        }
        return response;
    }
}
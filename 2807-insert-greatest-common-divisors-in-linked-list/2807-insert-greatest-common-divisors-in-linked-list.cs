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
    public int FindCommonDivisors(int x, int y)
    {
        int smallN = x > y ? y : x;

        while (smallN != 1)
        {
            if (x % smallN == 0 && y % smallN == 0) return smallN;
            smallN--;
        }
        return 1;
    }

    public ListNode InsertGreatestCommonDivisors(ListNode head)
    {
        ListNode nextTemp;
        ListNode it = head;
        ListNode newListHead = head; 
        
        while (it.next != null)
        {
            int cd = FindCommonDivisors(it.val, it.next.val);

            nextTemp = head.next;

            ListNode newNode = new ListNode();
            newNode.val = cd;
            newNode.next = nextTemp;

            head.next = newNode;
            head = head.next.next;

            it = nextTemp;
        }
        return newListHead;
    }
}